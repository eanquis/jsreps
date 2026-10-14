import { test } from 'node:test';
import assert from 'node:assert/strict';
import { assertCalls, exercise } from '../helpers.js';

const { load, code } = exercise('08-array-methods/ex07');

test('returns the position of the first negative number', async () => {
  const { positionOfFirstNegative } = await load('positionOfFirstNegative');
  assertCalls(positionOfFirstNegative, [
    [[[3, -1, -5]], 1],
    [[[-2, 4]], 0],
    [[[0, 1, 2, -0.5]], 3],
  ]);
});

test('returns -1 when there are no negative numbers', async () => {
  const { positionOfFirstNegative } = await load('positionOfFirstNegative');
  assertCalls(positionOfFirstNegative, [
    [[[1, 2, 0]], -1],
    [[[]], -1],
  ]);
});

test('uses findIndex', async () => {
  assert.match(await code(), /\.findIndex\s*\(/, 'Use .findIndex().');
});
