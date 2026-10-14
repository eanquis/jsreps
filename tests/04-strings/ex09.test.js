import { test } from 'node:test';
import assert from 'node:assert/strict';
import { assertCalls, exercise } from '../helpers.js';

const { load, code } = exercise('04-strings/ex09');

test('returns everything after the @', async () => {
  const { domain } = await load('domain');
  assertCalls(domain, [
    [['ada@example.com'], 'example.com'],
    [['grace@navy.mil'], 'navy.mil'],
    [['x@y'], 'y'],
  ]);
});

test('uses .slice()', async () => {
  assert.match(await code(), /\.slice\(/);
});
