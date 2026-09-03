import { execFile } from 'node:child_process';
import { promisify } from 'node:util';

const execFileAsync = promisify(execFile);

/**
 * @param {string} repoRoot
 * @param {{ added: number, updated: number, removed: number }} summary
 */
export async function publishChanges(repoRoot, summary) {
  const status = await git(repoRoot, ['status', '--porcelain']);
  if (!status.stdout.trim()) {
    return { committed: false, pushed: false, message: 'No changes to publish' };
  }

  await git(repoRoot, ['add', '-A']);

  const timestamp = new Date().toISOString().replace('T', ' ').slice(0, 19);
  const message = [
    `datamine: update Roblox assets (${timestamp} UTC)`,
    '',
    `Added: ${summary.added ?? 0}`,
    `Updated: ${summary.updated ?? 0}`,
    `Removed: ${summary.removed ?? 0}`,
    '',
    'Files pretty-printed before commit.',
  ].join('\n');

  await git(repoRoot, ['commit', '-m', message]);
  await git(repoRoot, ['push', 'origin', 'HEAD']);

  return { committed: true, pushed: true, message };
}

async function git(cwd, args) {
  return execFileAsync('git', args, { cwd, maxBuffer: 10 * 1024 * 1024 });
}
