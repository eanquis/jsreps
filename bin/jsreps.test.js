import { test } from 'node:test';
import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const bin = fileURLToPath(new URL('jsreps.js', import.meta.url));

test('runs the CLI with the command line arguments', () => {
  const { status, stdout } = spawnSync(process.execPath, [bin, 'help'], { encoding: 'utf8' });
  assert.equal(status, 0);
  assert.match(stdout, /Usage: npm run <command>/);
});

test('exits with the CLI exit code', () => {
  const { status } = spawnSync(process.execPath, [bin, 'dance'], { encoding: 'utf8' });
  assert.equal(status, 1);
});
