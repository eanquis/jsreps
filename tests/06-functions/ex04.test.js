import { test } from 'node:test';
import assert from 'node:assert/strict';
import { assertCalls, exercise } from '../helpers.js';

const { load } = exercise('06-functions/ex04');

test('`double(n)` gives back twice n', async () => {
  const { double } = await load('double');
  assertCalls(double, [
    [[4], 8],
    [[0], 0],
    [[-3], -6],
    [[2.5], 5],
  ]);
});
