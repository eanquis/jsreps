import { test } from 'node:test';
import assert from 'node:assert/strict';
import { assertCalls, exercise } from '../helpers.js';

const { load, code } = exercise('06-functions/ex17');

test('adds all the arguments', async () => {
  const { sum } = await load('sum');
  assertCalls(sum, [
    [[5], 5],
    [[1, 2, 3], 6],
    [[10, -5, 2.5], 7.5],
    [[1, 1, 1, 1, 1, 1, 1, 1], 8],
  ]);
});

test('returns 0 with no arguments', async () => {
  const { sum } = await load('sum');
  assertCalls(sum, [[[], 0]]);
});

test('uses a rest parameter', async () => {
  assert.match(await code(), /\(\s*\.\.\.\w+\s*\)/, 'Collect the arguments with ...numbers.');
});
