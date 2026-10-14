import { test } from 'node:test';
import assert from 'node:assert/strict';
import { assertCalls, exercise } from '../helpers.js';

const { load, code } = exercise('08-array-methods/ex03');

test('doubles every number', async () => {
  const { doubleAll } = await load('doubleAll');
  assertCalls(doubleAll, [
    [[[1, 2, 3]], [2, 4, 6]],
    [[[-5, 0, 0.5]], [-10, 0, 1]],
    [[[]], []],
  ]);
});

test("doesn't change the original array", async () => {
  const { doubleAll } = await load('doubleAll');
  const numbers = [1, 2, 3];
  const result = doubleAll(numbers);
  assert.deepEqual(numbers, [1, 2, 3], 'doubleAll changed the original array.');
  assert.notEqual(result, numbers, 'Return a new array, not the original one.');
});

test('uses map', async () => {
  assert.match(await code(), /\.map\s*\(/, 'Use .map().');
});

test('uses no loops', async () => {
  assert.doesNotMatch(await code(), /\b(for|while)\s*\(/, 'Use array methods instead of for/while loops.');
});
