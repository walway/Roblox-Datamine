import path from 'node:path';

const HASH_PREFIX = /^[a-f0-9]{8,}-/i;
const HASH_ONLY = /^[a-f0-9]{8,}(\.[a-z0-9]+)?$/i;

/**
 * Derive a human-readable filename from a Roblox CDN URL.
 * e.g. c322b91c...-FoundationCss.css -> FoundationCss.css
 */
export function resolveAssetFilename(url, bundleName) {
  const { pathname } = new URL(url);
  const basename = path.basename(pathname);
  const ext = path.extname(basename);

  if (HASH_PREFIX.test(basename)) {
    return basename.replace(HASH_PREFIX, '');
  }

  if (bundleName) {
    const safeName = sanitizeFilename(bundleName);
    return ext ? `${safeName}${ext}` : safeName;
  }

  if (HASH_ONLY.test(basename)) {
    return basename;
  }

  return basename;
}

export function resolveOutputPath(url, bundleName, explicitPath) {
  if (explicitPath) {
    return explicitPath.replace(/\\/g, '/');
  }

  const { hostname, pathname } = new URL(url);

  if (hostname === 'www.roblox.com' || hostname === 'roblox.com' || hostname === 'create.roblox.com') {
    return path.join(hostname, pathname.replace(/^\//, '')).replace(/\\/g, '/');
  }

  if (hostname === 'assets.create.roblox.com') {
    return path.join(hostname, pathname.replace(/^\//, '')).replace(/\\/g, '/');
  }

  const filename = resolveAssetFilename(url, bundleName);
  return path.join(hostname, filename).replace(/\\/g, '/');
}

export function resolveClientVersionPath(platform) {
  return path
    .join('clientsettings.roblox.com', 'v2', 'client-version', `${platform}.json`)
    .replace(/\\/g, '/');
}

export function sanitizeFilename(name) {
  return name.replace(/[<>:"|?*\\]/g, '_').trim();
}

export function getHostname(url) {
  return new URL(url).hostname;
}
