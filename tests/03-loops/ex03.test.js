import { test } from 'node:test';
import assert from 'node:assert/strict';
import { assertCalls, exercise } from '../helpers.js';

const { load, code } = exercise('03-loops/ex03');

test('multiplies the numbers from 1 to n', async () => {
  const { factorial } = await load('factorial');
  assertCalls(factorial, [
    [[1], 1],
    [[3], 6],
    [[4], 24],
    [[5], 120],
    [[10], 3628800],
  ]);
});

test('the factorial of 0 is 1', async () => {
  const { factorial } = await load('factorial');
  assertCalls(factorial, [[[0], 1]]);
});

test('uses a for loop', async () => {
  assert.match(await code(), /\bfor\s*\(/, 'Use a for loop.');
});
