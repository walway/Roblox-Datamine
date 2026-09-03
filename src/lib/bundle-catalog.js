import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const CONFIG_DIR = path.resolve(__dirname, '../../config');

/**
 * @returns {Promise<{ js: string[], translation: string[] }>}
 */
export async function loadBundleCatalog() {
  const jsPath = path.join(CONFIG_DIR, 'js-bundles.json');
  const translationPath = path.join(CONFIG_DIR, 'translation-bundles.json');

  try {
    const [jsRaw, translationRaw] = await Promise.all([
      fs.readFile(jsPath, 'utf8'),
      fs.readFile(translationPath, 'utf8'),
    ]);
    return {
      js: JSON.parse(jsRaw),
      translation: JSON.parse(translationRaw),
    };
  } catch {
    return { js: [], translation: [] };
  }
}

/**
 * @param {{ js: string[], translation: string[] }} catalog
 * @returns {{ url: string, bundleName?: string }[]}
 */
export function catalogTranslationUrls(catalog) {
  const assets = [];
  const seen = new Set();

  for (const filename of catalog.translation) {
    const url = `https://js.rbxcdn.com/${filename}`;
    if (seen.has(url)) continue;
    seen.add(url);
    assets.push({
      url,
      bundleName: filename.replace(/\.js$/, ''),
    });
  }

  return assets;
}
