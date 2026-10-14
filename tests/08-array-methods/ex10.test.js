import { test } from 'node:test';
import assert from 'node:assert/strict';
import { assertCalls, exercise } from '../helpers.js';

const { load, code } = exercise('08-array-methods/ex10');

test('adds up all the prices', async () => {
  const { total } = await load('total');
  assertCalls(total, [
    [[[10, 20, 30]], 60],
    [[[5]], 5],
    [[[1.5, 2.5]], 4],
  ]);
});

test('an empty list costs 0', async () => {
  const { total } = await load('total');
  assertCalls(total, [[[[]], 0]]);
});

test('uses reduce', async () => {
  assert.match(await code(), /\.reduce\s*\(/, 'Use .reduce().');
});

test('uses no loops', async () => {
  assert.doesNotMatch(await code(), /\b(for|while)\s*\(/, 'Use array methods instead of for/while loops.');
});
