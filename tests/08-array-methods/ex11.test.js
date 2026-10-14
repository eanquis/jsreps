import { test } from 'node:test';
import assert from 'node:assert/strict';
import { assertCalls, exercise } from '../helpers.js';

const { load, code } = exercise('08-array-methods/ex11');

test('returns the largest number', async () => {
  const { largest } = await load('largest');
  assertCalls(largest, [
    [[[3, 9, 2]], 9],
    [[[9, 3, 2]], 9],
    [[[2, 3, 9]], 9],
    [[[7]], 7],
  ]);
});

test('works with negative numbers', async () => {
  const { largest } = await load('largest');
  assertCalls(largest, [
    [[[-5, -2, -9]], -2],
    [[[-1, 0]], 0],
  ]);
});

test('uses reduce', async () => {
  assert.match(await code(), /\.reduce\s*\(/, 'Use .reduce().');
});

test('uses no loops', async () => {
  assert.doesNotMatch(await code(), /\b(for|while)\s*\(/, 'Use array methods instead of for/while loops.');
});
