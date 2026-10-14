import { test } from 'node:test';
import assert from 'node:assert/strict';
import { assertCalls, exercise } from '../helpers.js';

const { load } = exercise('03-loops/ex07');

test('includes both ends of the range', async () => {
  const { sumRange } = await load('sumRange');
  assertCalls(sumRange, [
    [[1, 5], 15],
    [[0, 10], 55],
    [[4, 6], 15],
  ]);
});

test('a range of one number is that number', async () => {
  const { sumRange } = await load('sumRange');
  assertCalls(sumRange, [[[3, 3], 3]]);
});

test('works with negative numbers', async () => {
  const { sumRange } = await load('sumRange');
  assertCalls(sumRange, [[[-2, 2], 0]]);
});
