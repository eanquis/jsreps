import { test } from 'node:test';
import assert from 'node:assert/strict';
import { assertCalls, exercise } from '../helpers.js';

const { load, code } = exercise('06-functions/ex10');

test('`square(n)` returns n times n', async () => {
  const { square } = await load('square');
  assertCalls(square, [
    [[3], 9],
    [[-2], 4],
    [[0], 0],
  ]);
});

test('`sumOfSquares(a, b)` adds the squares', async () => {
  const { sumOfSquares } = await load('sumOfSquares');
  assertCalls(sumOfSquares, [
    [[3, 4], 25],
    [[0, 0], 0],
    [[1, -1], 2],
  ]);
});

test('`sumOfSquares` calls `square`', async () => {
  const calls = (await code()).match(/(?<!function\s+)\bsquare\s*\(/g) ?? [];
  assert.ok(calls.length > 0, 'Call square(...) inside sumOfSquares instead of repeating the math.');
});
