import fs from 'node:fs/promises';
import path from 'node:path';
import prettier from 'prettier';

const SKIP_DIRS = new Set([
  'node_modules',
  '.git',
  '.datamine',
  '.github',
  'config',
  'src',
  'scripts',
]);

const FORMATTABLE = new Set(['.js', '.css', '.json', '.map', '.html', '.md']);

/**
 * Pretty-print a single file in place (like Shift+Alt+F).
 * @param {string} filePath
 * @returns {Promise<boolean>} true if the file was reformatted
 */
export async function prettyPrintFile(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  if (!FORMATTABLE.has(ext)) return false;

  let source;
  try {
    source = await fs.readFile(filePath, 'utf8');
  } catch {
    return false;
  }

  if (!source.trim()) return false;

  const parser = pickParser(ext, source);
  if (!parser) return false;

  try {
    const formatted = await prettier.format(source, {
      parser,
      printWidth: 100,
      tabWidth: 2,
      useTabs: false,
      semi: true,
      singleQuote: false,
      trailingComma: 'none',
      endOfLine: 'lf',
    });

    if (formatted === source) return false;
    await fs.writeFile(filePath, formatted, 'utf8');
    return true;
  } catch {
    // Minified/broken assets sometimes can't parse — leave original.
    return false;
  }
}

/**
 * Pretty-print every mined asset under the repo root before upload.
 * @param {string} repoRoot
 * @returns {Promise<{ formatted: number, skipped: number }>}
 */
export async function prettyPrintRepo(repoRoot) {
  const stats = { formatted: 0, skipped: 0 };
  const files = await listAssetFiles(repoRoot);

  for (const file of files) {
    const changed = await prettyPrintFile(file);
    if (changed) stats.formatted++;
    else stats.skipped++;
  }

  return stats;
}

/**
 * Pretty-print only the given relative paths (files just written).
 * @param {string} repoRoot
 * @param {string[]} relativePaths
 */
export async function prettyPrintPaths(repoRoot, relativePaths) {
  const stats = { formatted: 0, skipped: 0 };
  for (const relative of relativePaths) {
    const absolute = path.join(repoRoot, relative);
    const changed = await prettyPrintFile(absolute);
    if (changed) stats.formatted++;
    else stats.skipped++;
  }
  return stats;
}

function pickParser(ext, source) {
  switch (ext) {
    case '.js':
      return 'babel';
    case '.css':
      return 'css';
    case '.json':
    case '.map':
      return 'json';
    case '.html':
      return 'html';
    case '.md':
      return 'markdown';
    default:
      return null;
  }
}

async function listAssetFiles(repoRoot) {
  const results = [];

  async function walk(dir) {
    let entries;
    try {
      entries = await fs.readdir(dir, { withFileTypes: true });
    } catch {
      return;
    }

    for (const entry of entries) {
      if (entry.name.startsWith('.') && entry.name !== '.datamine') continue;
      if (SKIP_DIRS.has(entry.name)) continue;

      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        await walk(full);
      } else if (entry.isFile() && FORMATTABLE.has(path.extname(entry.name).toLowerCase())) {
        results.push(full);
      }
    }
  }

  await walk(repoRoot);
  return results;
}
