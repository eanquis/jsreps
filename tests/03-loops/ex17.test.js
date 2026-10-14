import { test } from 'node:test';
import assert from 'node:assert/strict';
import { assertCalls, exercise } from '../helpers.js';

const { load } = exercise('03-loops/ex17');

test('adds up the squares', async () => {
  const { sumOfSquares } = await load('sumOfSquares');
  assertCalls(sumOfSquares, [
    [[1], 1],
    [[3], 14],
    [[4], 30],
    [[10], 385],
  ]);
});

test('the sum of no squares is 0', async () => {
  const { sumOfSquares } = await load('sumOfSquares');
  assertCalls(sumOfSquares, [[[0], 0]]);
});
