import { test } from 'node:test';
import assert from 'node:assert/strict';
import { assertCalls, exercise } from '../helpers.js';

const { load } = exercise('08-array-methods/ex13');

test('sorts numbers from smallest to largest', async () => {
  const { sortAscending } = await load('sortAscending');
  assertCalls(sortAscending, [
    [[[10, 9, 1]], [1, 9, 10]],
    [[[100, 25, 3, -5]], [-5, 3, 25, 100]],
    [[[2, 1]], [1, 2]],
    [[[]], []],
  ]);
});

test("doesn't change the original array", async () => {
  const { sortAscending } = await load('sortAscending');
  const numbers = [3, 1, 2];
  sortAscending(numbers);
  assert.deepEqual(numbers, [3, 1, 2], 'sortAscending changed the original array.');
});
