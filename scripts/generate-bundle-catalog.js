import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const CATALOG_URL =
  'https://api.github.com/repos/EliCauvert/Roblox-Datamining/contents/JS/js.rbxcdn.com';

async function main() {
  const response = await fetch(CATALOG_URL, {
    headers: { Accept: 'application/vnd.github+json' },
  });
  if (!response.ok) {
    throw new Error(`Failed to fetch bundle catalog: HTTP ${response.status}`);
  }

  const entries = await response.json();
  const names = entries.map((entry) => entry.name).filter((name) => name.endsWith('.js'));
  const translation = names.filter((name) =>
    name.startsWith('DynamicLocalizationResourceScript_')
  );
  const js = names.filter((name) => !name.startsWith('DynamicLocalizationResourceScript_'));

  await fs.mkdir(path.join(ROOT, 'config'), { recursive: true });
  await fs.writeFile(
    path.join(ROOT, 'config', 'translation-bundles.json'),
    JSON.stringify(translation, null, 2) + '\n'
  );
  await fs.writeFile(
    path.join(ROOT, 'config', 'js-bundles.json'),
    JSON.stringify(js, null, 2) + '\n'
  );

  console.log(`Catalog synced: ${js.length} JS bundles, ${translation.length} translation bundles`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
