import { spawn } from 'node:child_process';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = path.resolve(__dirname, '..');

const DEFAULT_INTERVAL_MS = 5 * 60 * 1000; // 5 minutes

function parseInterval(args) {
  const flag = args.find((arg) => arg.startsWith('--interval='));
  if (!flag) return DEFAULT_INTERVAL_MS;
  const value = flag.slice('--interval='.length).trim().toLowerCase();
  const match = value.match(/^(\d+)(ms|s|m|h)?$/);
  if (!match) return DEFAULT_INTERVAL_MS;
  const amount = Number(match[1]);
  const unit = match[2] || 'm';
  switch (unit) {
    case 'ms':
      return amount;
    case 's':
      return amount * 1000;
    case 'h':
      return amount * 60 * 60 * 1000;
    case 'm':
    default:
      return amount * 60 * 1000;
  }
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function runMinePush() {
  return new Promise((resolve) => {
    const child = spawn(process.execPath, ['src/dataminer.js', '--push'], {
      cwd: REPO_ROOT,
      stdio: 'inherit',
      env: process.env,
    });

    child.on('error', (error) => {
      console.error(`[watch] failed to start mine: ${error.message}`);
      resolve(1);
    });

    child.on('close', (code) => {
      resolve(code ?? 1);
    });
  });
}

async function main() {
  const args = process.argv.slice(2);
  const intervalMs = parseInterval(args);

  console.log('[watch] Roblox datamine 24/7 watcher');
  console.log(`[watch] Interval: ${Math.round(intervalMs / 1000)}s`);
  console.log('[watch] Pretty-prints, commits, and pushes on every change');
  console.log('[watch] Press Ctrl+C to stop\n');

  let cycle = 0;
  while (true) {
    cycle += 1;
    const started = new Date().toISOString();
    console.log(`\n[watch] === Cycle #${cycle} @ ${started} ===`);

    const code = await runMinePush();
    if (code !== 0) {
      console.error(`[watch] Cycle #${cycle} exited with code ${code}; will retry after interval`);
    } else {
      console.log(`[watch] Cycle #${cycle} finished`);
    }

    console.log(`[watch] Sleeping ${Math.round(intervalMs / 1000)}s...`);
    await sleep(intervalMs);
  }
}

main().catch((error) => {
  console.error('[watch] Fatal:', error);
  process.exit(1);
});
