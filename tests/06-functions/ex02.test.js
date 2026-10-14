import { test } from 'node:test';
import assert from 'node:assert/strict';
import { assertCalls, exercise } from '../helpers.js';

const { load } = exercise('06-functions/ex02');

test('`half(n)` returns half of n', async () => {
  const { half } = await load('half');
  assertCalls(half, [
    [[10], 5],
    [[3], 1.5],
    [[0], 0],
    [[-8], -4],
  ]);
});
