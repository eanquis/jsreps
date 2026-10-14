import { test } from 'node:test';
import assert from 'node:assert/strict';
import { assertCalls, exercise } from '../helpers.js';

const { load } = exercise('08-array-methods/ex16');

test('returns the square of each number', async () => {
  const { squares } = await load('squares');
  assertCalls(squares, [
    [[[1, 2, 3]], [1, 4, 9]],
    [[[-4, 0.5]], [16, 0.25]],
    [[[]], []],
  ]);
});
