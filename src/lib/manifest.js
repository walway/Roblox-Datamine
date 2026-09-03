import crypto from 'node:crypto';
import fs from 'node:fs/promises';
import path from 'node:path';

const MANIFEST_DIR = '.datamine';
const MANIFEST_FILE = 'manifest.json';

export function contentHash(buffer) {
  return crypto.createHash('sha256').update(buffer).digest('hex');
}

export async function loadManifest(repoRoot) {
  const manifestPath = path.join(repoRoot, MANIFEST_DIR, MANIFEST_FILE);
  try {
    const raw = await fs.readFile(manifestPath, 'utf8');
    return JSON.parse(raw);
  } catch {
    return { version: 1, assets: {}, lastRun: null };
  }
}

export async function saveManifest(repoRoot, manifest) {
  const dir = path.join(repoRoot, MANIFEST_DIR);
  await fs.mkdir(dir, { recursive: true });
  await fs.writeFile(
    path.join(dir, MANIFEST_FILE),
    JSON.stringify(manifest, null, 2) + '\n',
    'utf8'
  );
}

export function hasChanged(manifest, sourceUrl, hash) {
  const entry = manifest.assets[sourceUrl];
  return !entry || entry.hash !== hash;
}

export function recordAsset(manifest, sourceUrl, entry) {
  manifest.assets[sourceUrl] = entry;
}
