import { fetchAsset } from './fetch-asset.js';

const MIRROR_BASE =
  'https://raw.githubusercontent.com/EliCauvert/Roblox-Datamining/main/JS/js.rbxcdn.com';

/**
 * @param {string} filename e.g. DynamicLocalizationResourceScript_Feature.Avatar.js
 */
export async function fetchTranslationMirror(filename) {
  const url = `${MIRROR_BASE}/${filename}`;
  const result = await fetchAsset(url);
  if (!result.ok) {
    return null;
  }

  const text = result.body.toString('utf8');
  if (!text.includes('Roblox.LangDynamic') && !text.includes('LangDynamic[')) {
    return null;
  }

  return result.body;
}
