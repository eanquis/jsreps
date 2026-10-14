import { test } from 'node:test';
import assert from 'node:assert/strict';
import { assertCalls, exercise } from '../helpers.js';

const { load, code } = exercise('08-array-methods/ex04');

test('keeps only the even numbers, in order', async () => {
  const { onlyEven } = await load('onlyEven');
  assertCalls(onlyEven, [
    [[[1, 2, 3, 4, 5, 6]], [2, 4, 6]],
    [[[10, 7, 0, -2]], [10, 0, -2]],
    [[[1, 3, 5]], []],
    [[[]], []],
  ]);
});

test('uses filter', async () => {
  assert.match(await code(), /\.filter\s*\(/, 'Use .filter().');
});

test('uses no loops', async () => {
  assert.doesNotMatch(await code(), /\b(for|while)\s*\(/, 'Use array methods instead of for/while loops.');
});
