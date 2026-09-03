import * as cheerio from 'cheerio';

const RBXCDN_URL_RE =
  /https?:\/\/(?:css|js|sourcemaps)\.rbxcdn\.com\/[a-zA-Z0-9._%-]+/g;
const HOSTED_ASSET_RE =
  /https?:\/\/(?:assets\.create\.roblox\.com|www\.roblox\.com|roblox\.com|create\.roblox\.com)\/[a-zA-Z0-9._~:/?#[\]@!$&'()*+,;=%-]+/g;

const TEXT_ASSET_EXTENSIONS = new Set([
  '.css',
  '.js',
  '.json',
  '.map',
  '.txt',
  '.xml',
  '.html',
]);

const SKIP_EXTENSIONS = new Set([
  '.png',
  '.jpg',
  '.jpeg',
  '.gif',
  '.webp',
  '.svg',
  '.ico',
  '.woff',
  '.woff2',
  '.ttf',
  '.eot',
  '.mp4',
  '.webm',
]);

/**
 * @typedef {{ url: string, bundleName?: string, outputPath?: string }} DiscoveredAsset
 */

/**
 * @param {string} html
 * @param {Set<string>} hostAllowlist
 * @returns {DiscoveredAsset[]}
 */
export function discoverFromHtml(html, hostAllowlist) {
  const $ = cheerio.load(html);
  const assets = new Map();

  $('link[href], script[src]').each((_, el) => {
    const tag = el.tagName?.toLowerCase();
    const rawUrl = tag === 'link' ? $(el).attr('href') : $(el).attr('src');
    if (!rawUrl) return;

    const url = normalizeUrl(rawUrl);
    if (!url) return;
    if (!isAllowedAsset(url, hostAllowlist)) return;

    const bundleName = $(el).attr('data-bundlename') || undefined;
    mergeAsset(assets, { url, bundleName });
  });

  for (const match of html.matchAll(RBXCDN_URL_RE)) {
    const url = cleanUrl(match[0]);
    if (!isAllowedAsset(url, hostAllowlist)) continue;
    mergeAsset(assets, { url });
  }

  for (const match of html.matchAll(HOSTED_ASSET_RE)) {
    const url = cleanUrl(match[0]);
    if (!isAllowedAsset(url, hostAllowlist)) continue;
    mergeAsset(assets, { url });
  }

  return [...assets.values()];
}

/**
 * @param {string} text
 * @param {Set<string>} hostAllowlist
 * @returns {DiscoveredAsset[]}
 */
export function discoverFromText(text, hostAllowlist) {
  const assets = new Map();

  for (const pattern of [RBXCDN_URL_RE, HOSTED_ASSET_RE]) {
    for (const match of text.matchAll(pattern)) {
      const url = cleanUrl(match[0]);
      if (!isAllowedAsset(url, hostAllowlist)) continue;
      mergeAsset(assets, { url });
    }
  }

  return [...assets.values()];
}

/**
 * @param {string} jsText
 * @returns {string[]}
 */
export function discoverSourceMapUrls(jsText) {
  const maps = new Set();
  const re = /sourceMappingURL=(https?:\/\/sourcemaps\.rbxcdn\.com\/[a-zA-Z0-9._-]+\.map)/g;
  for (const match of jsText.matchAll(re)) {
    maps.add(cleanUrl(match[1]));
  }
  return [...maps];
}

export function isRbxCdnAsset(url) {
  try {
    const { hostname } = new URL(url);
    return ['css.rbxcdn.com', 'js.rbxcdn.com', 'sourcemaps.rbxcdn.com'].includes(
      hostname
    );
  } catch {
    return false;
  }
}

function isAllowedAsset(url, hostAllowlist) {
  try {
    const { hostname, pathname } = new URL(url);
    if (!hostAllowlist.has(hostname)) return false;

    const ext = pathExtension(pathname);
    if (ext && SKIP_EXTENSIONS.has(ext)) return false;
    if (!ext) return pathname.endsWith('.js') || pathname.includes('/_next/');
    return TEXT_ASSET_EXTENSIONS.has(ext);
  } catch {
    return false;
  }
}

function pathExtension(pathname) {
  const index = pathname.lastIndexOf('.');
  if (index === -1) return '';
  return pathname.slice(index).toLowerCase();
}

function mergeAsset(map, asset) {
  const existing = map.get(asset.url);
  if (!existing) {
    map.set(asset.url, asset);
    return;
  }
  if (!existing.bundleName && asset.bundleName) {
    map.set(asset.url, { ...existing, bundleName: asset.bundleName });
  }
  if (!existing.outputPath && asset.outputPath) {
    map.set(asset.url, { ...map.get(asset.url), outputPath: asset.outputPath });
  }
}

function cleanUrl(raw) {
  return raw.replace(/['")\]}>]+$/, '');
}

function normalizeUrl(raw) {
  try {
    if (raw.startsWith('//')) return `https:${raw}`;
    if (raw.startsWith('http')) return raw.split('#')[0];
    return null;
  } catch {
    return null;
  }
}
