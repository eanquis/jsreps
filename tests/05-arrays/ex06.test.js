import { test } from 'node:test';
import assert from 'node:assert/strict';
import { assertCalls, exercise } from '../helpers.js';

const { load, code } = exercise('05-arrays/ex06');

test('adds all the numbers', async () => {
  const { sum } = await load('sum');
  assertCalls(sum, [
    [[[1, 2, 3, 4]], 10],
    [[[5]], 5],
    [[[10, -3, -7]], 0],
    [[[0.5, 0.25]], 0.75],
  ]);
});

test('an empty list sums to 0', async () => {
  const { sum } = await load('sum');
  assertCalls(sum, [[[[]], 0]]);
});

test('uses a for loop', async () => {
  const source = await code();
  assert.match(source, /\bfor\s*\(/, 'Use a for loop.');
  assert.doesNotMatch(source, /\.reduce\(/, "Don't use reduce: you'll learn it in module 08.");
});
