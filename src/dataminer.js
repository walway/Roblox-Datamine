import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { catalogTranslationUrls, loadBundleCatalog } from './lib/bundle-catalog.js';
import {
  discoverFromHtml,
  discoverFromText,
  discoverSourceMapUrls,
} from './lib/discover.js';
import { fetchAsset, fetchText } from './lib/fetch-asset.js';
import {
  contentHash,
  hasChanged,
  loadManifest,
  recordAsset,
  saveManifest,
} from './lib/manifest.js';
import {
  getHostname,
  resolveClientVersionPath,
  resolveOutputPath,
} from './lib/naming.js';
import { prettyPrintRepo } from './lib/pretty.js';
import { publishChanges } from './lib/publish.js';
import { fetchTranslationMirror } from './lib/translation-fallback.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = path.resolve(__dirname, '..');
const CONFIG_PATH = path.join(REPO_ROOT, 'config', 'seeds.json');
const CATALOG_URL =
  'https://api.github.com/repos/EliCauvert/Roblox-Datamining/contents/JS/js.rbxcdn.com';

const args = new Set(process.argv.slice(2));
const shouldPush = args.has('--push');

async function main() {
  await cleanupStaleOutputs(REPO_ROOT);

  const config = JSON.parse(await fs.readFile(CONFIG_PATH, 'utf8'));
  const hostAllowlist = new Set(config.hostAllowlist);
  const manifest = await loadManifest(REPO_ROOT);
  const summary = { added: 0, updated: 0, removed: 0, skipped: 0, failed: 0 };

  await ensureBundleCatalog();

  const catalog = await loadBundleCatalog();
  const discoveredAssets = new Map();

  log('Discovering assets from seed pages...');
  for (const pageUrl of config.pages) {
    try {
      const html = await fetchText(pageUrl);
      for (const asset of discoverFromHtml(html, hostAllowlist)) {
        mergeAsset(discoveredAssets, asset);
      }
      for (const ref of discoverFromText(html, hostAllowlist)) {
        mergeAsset(discoveredAssets, ref);
      }
      log(`  ${pageUrl}: ${discoveredAssets.size} unique assets`);
    } catch (error) {
      log(`  WARN: failed to scan ${pageUrl}: ${error.message}`);
      summary.failed++;
    }
  }

  log('Queueing missing translation bundles from catalog...');
  let catalogAdded = 0;
  for (const asset of catalogTranslationUrls(catalog)) {
    const alreadyFound = [...discoveredAssets.values()].some(
      (existing) => existing.bundleName === asset.bundleName
    );
    if (alreadyFound) continue;
    mergeAsset(discoveredAssets, { ...asset, fromCatalog: true });
    catalogAdded++;
  }
  log(`  ${catalogAdded} translation bundles queued from catalog`);

  for (const asset of config.staticAssets || []) {
    mergeAsset(discoveredAssets, {
      url: asset.url,
      outputPath: asset.path,
      bundleName: path.basename(asset.path, path.extname(asset.path)),
    });
  }

  log(`Fetching ${discoveredAssets.size} assets...`);
  const fetchedBodies = new Map();

  for (const [url, meta] of discoveredAssets) {
    const stored = await storeAsset({
      url,
      meta,
      manifest,
      summary,
      repoRoot: REPO_ROOT,
      fetchedBodies,
      silent404: Boolean(meta.fromCatalog),
    });

    if (!stored && meta.fromCatalog && meta.bundleName) {
      await fetchTranslationFallback({
        filename: `${meta.bundleName}.js`,
        manifest,
        summary,
        repoRoot: REPO_ROOT,
        fetchedBodies,
      });
    }
  }

  log('Scanning JS for source maps and referenced assets...');
  for (const [sourceUrl, body] of fetchedBodies) {
    const text = body.toString('utf8');

    for (const mapUrl of discoverSourceMapUrls(text)) {
      if (discoveredAssets.has(mapUrl)) continue;
      discoveredAssets.set(mapUrl, { url: mapUrl });
      await storeAsset({
        url: mapUrl,
        meta: { url: mapUrl },
        manifest,
        summary,
        repoRoot: REPO_ROOT,
        fetchedBodies,
      });
    }

    for (const ref of discoverFromText(text, hostAllowlist)) {
      if (discoveredAssets.has(ref.url)) continue;
      discoveredAssets.set(ref.url, ref);
      await storeAsset({
        url: ref.url,
        meta: ref,
        manifest,
        summary,
        repoRoot: REPO_ROOT,
        fetchedBodies,
      });
    }
  }

  log(`Fetching ${config.clientVersions.length} client version endpoints...`);
  for (const platform of config.clientVersions) {
    const url = `https://clientsettings.roblox.com/v2/client-version/${platform}`;
    const outputPath = resolveClientVersionPath(platform);
    await storeAsset({
      url,
      meta: { url, outputPath },
      manifest,
      summary,
      repoRoot: REPO_ROOT,
      fetchedBodies,
      formatJson: true,
    });
  }

  log('Filling translation gaps from reference mirror...');
  for (const filename of catalog.translation) {
    const bundleName = filename.replace(/\.js$/, '');
    const alreadyCollected = Object.values(manifest.assets).some(
      (entry) => entry.bundleName === bundleName
    );
    if (alreadyCollected) continue;
    await fetchTranslationFallback({
      filename,
      manifest,
      summary,
      repoRoot: REPO_ROOT,
      fetchedBodies,
    });
  }

  manifest.lastRun = new Date().toISOString();
  await saveManifest(REPO_ROOT, manifest);
  await writeRunReport(REPO_ROOT, summary, discoveredAssets.size, catalog, manifest);

  log('');
  log('Pretty-printing mined files...');
  const pretty = await prettyPrintRepo(REPO_ROOT);
  log(`  Formatted: ${pretty.formatted}`);
  log(`  Unchanged/unparseable: ${pretty.skipped}`);

  log('');
  log('Summary:');
  log(`  Added:   ${summary.added}`);
  log(`  Updated: ${summary.updated}`);
  log(`  Skipped: ${summary.skipped}`);
  log(`  Failed:  ${summary.failed}`);

  if (shouldPush) {
    log('');
    log('Publishing to GitHub...');
    const result = await publishChanges(REPO_ROOT, summary);
    log(`  ${result.message}`);
  }
}

async function storeAsset({
  url,
  meta,
  manifest,
  summary,
  repoRoot,
  fetchedBodies,
  formatJson = false,
  silent404 = false,
}) {
  try {
    const result = await fetchAsset(url);
    if (!result.ok) {
      if (silent404 && (result.status === 404 || result.status === 403)) {
        return false;
      }
      if (result.status !== 404) {
        log(`  WARN: HTTP ${result.status} for ${url}`);
      }
      summary.failed++;
      return false;
    }

    const relativePath = resolveOutputPath(url, meta.bundleName, meta.outputPath);
    const absolutePath = path.join(repoRoot, relativePath);
    let bodyToWrite = result.body;

    if (formatJson || relativePath.endsWith('.json')) {
      try {
        const parsed = JSON.parse(result.body.toString('utf8'));
        bodyToWrite = Buffer.from(JSON.stringify(parsed, null, 2) + '\n', 'utf8');
      } catch {
        bodyToWrite = result.body;
      }
    }

    const hash = contentHash(bodyToWrite);
    const isNew = !manifest.assets[url];
    const changed = hasChanged(manifest, url, hash);

    if (changed) {
      await fs.mkdir(path.dirname(absolutePath), { recursive: true });
      await fs.writeFile(absolutePath, bodyToWrite);
      if (isNew) summary.added++;
      else summary.updated++;
      log(`  ${isNew ? 'ADD' : 'UPDATE'} ${relativePath}`);
    } else {
      summary.skipped++;
    }

    if (relativePath.endsWith('.js') || relativePath.endsWith('.css')) {
      fetchedBodies.set(url, bodyToWrite);
    }

    recordAsset(manifest, url, {
      path: relativePath,
      hash,
      bundleName: meta.bundleName || null,
      lastFetched: new Date().toISOString(),
      source: 'rbxcdn',
    });

    return true;
  } catch (error) {
    log(`  WARN: failed ${url}: ${error.message}`);
    summary.failed++;
    return false;
  }
}

async function fetchTranslationFallback({
  filename,
  manifest,
  summary,
  repoRoot,
  fetchedBodies,
}) {
  const bundleName = filename.replace(/\.js$/, '');
  const mirrorKey = `mirror:${bundleName}`;
  if (manifest.assets[mirrorKey]) {
    return;
  }

  const body = await fetchTranslationMirror(filename);
  if (!body) {
    return;
  }

  const relativePath = path.join('js.rbxcdn.com', filename).replace(/\\/g, '/');
  const absolutePath = path.join(repoRoot, relativePath);
  const hash = contentHash(body);
  const isNew = !manifest.assets[mirrorKey];
  const changed = !manifest.assets[mirrorKey] || manifest.assets[mirrorKey].hash !== hash;

  if (changed) {
    await fs.mkdir(path.dirname(absolutePath), { recursive: true });
    await fs.writeFile(absolutePath, body);
    if (isNew) summary.added++;
    else summary.updated++;
    log(`  ADD (translation mirror) ${relativePath}`);
  }

  fetchedBodies.set(mirrorKey, body);
  recordAsset(manifest, mirrorKey, {
    path: relativePath,
    hash,
    bundleName,
    lastFetched: new Date().toISOString(),
    source: 'translation-mirror',
  });
}

async function ensureBundleCatalog() {
  const catalog = await loadBundleCatalog();
  if (catalog.js.length > 0 && catalog.translation.length > 0) {
    return;
  }

  log('Syncing bundle catalog from reference repo...');
  try {
    const response = await fetch(CATALOG_URL, {
      headers: { Accept: 'application/vnd.github+json' },
    });
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    const entries = await response.json();
    const names = entries.map((entry) => entry.name).filter((name) => name.endsWith('.js'));
    const translation = names.filter((name) =>
      name.startsWith('DynamicLocalizationResourceScript_')
    );
    const js = names.filter((name) => !name.startsWith('DynamicLocalizationResourceScript_'));

    const configDir = path.join(REPO_ROOT, 'config');
    await fs.mkdir(configDir, { recursive: true });
    await fs.writeFile(
      path.join(configDir, 'translation-bundles.json'),
      JSON.stringify(translation, null, 2) + '\n'
    );
    await fs.writeFile(
      path.join(configDir, 'js-bundles.json'),
      JSON.stringify(js, null, 2) + '\n'
    );
    log(`  Synced ${js.length} JS + ${translation.length} translation bundles`);
  } catch (error) {
    log(`  WARN: could not sync bundle catalog: ${error.message}`);
  }
}

function mergeAsset(map, asset) {
  const existing = map.get(asset.url);
  if (!existing) {
    map.set(asset.url, asset);
    return;
  }
  map.set(asset.url, {
    ...existing,
    bundleName: existing.bundleName || asset.bundleName,
    outputPath: existing.outputPath || asset.outputPath,
  });
}

async function cleanupStaleOutputs(repoRoot) {
  const staleRoots = ['catalog.roblox.com', 'games.roblox.com', 'locale.roblox.com'];
  for (const dir of staleRoots) {
    await fs.rm(path.join(repoRoot, dir), { recursive: true, force: true });
  }
}

async function writeRunReport(repoRoot, summary, totalDiscovered, catalog, manifest) {
  const collectedTranslations = new Set(
    Object.values(manifest.assets)
      .map((entry) => entry.bundleName)
      .filter((name) => name?.startsWith('DynamicLocalizationResourceScript_'))
  );

  const missingTranslations = catalog.translation.filter((filename) => {
    const bundleName = filename.replace(/\.js$/, '');
    return !collectedTranslations.has(bundleName);
  });

  const report = {
    timestamp: new Date().toISOString(),
    totalDiscovered,
    translationBundlesCollected: collectedTranslations.size,
    translationBundlesTarget: catalog.translation.length,
    missingTranslationBundles: missingTranslations.length,
    missingTranslations,
    ...summary,
  };
  const reportPath = path.join(repoRoot, '.datamine', 'last-run.json');
  await fs.mkdir(path.dirname(reportPath), { recursive: true });
  await fs.writeFile(reportPath, JSON.stringify(report, null, 2) + '\n', 'utf8');
}

function log(message) {
  console.log(message);
}

main().catch((error) => {
  console.error('Dataminer failed:', error);
  process.exit(1);
});
