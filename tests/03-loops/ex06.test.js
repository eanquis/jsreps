import { test } from 'node:test';
import assert from 'node:assert/strict';
import { assertCalls, exercise } from '../helpers.js';

const { load, code } = exercise('03-loops/ex06');

test('counts the multiples', async () => {
  const { countMultiples } = await load('countMultiples');
  assertCalls(countMultiples, [
    [[10, 3], 3],
    [[10, 2], 5],
    [[15, 5], 3],
    [[7, 1], 7],
  ]);
});

test('returns 0 when there are no multiples', async () => {
  const { countMultiples } = await load('countMultiples');
  assertCalls(countMultiples, [
    [[4, 5], 0],
    [[0, 3], 0],
  ]);
});

test('uses a loop', async () => {
  assert.match(await code(), /\b(for|while)\s*\(/, 'Go through the numbers with a loop.');
});
