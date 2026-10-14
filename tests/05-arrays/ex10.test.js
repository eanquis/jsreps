import { test } from 'node:test';
import assert from 'node:assert/strict';
import { assertCalls, exercise } from '../helpers.js';

const { load, code } = exercise('05-arrays/ex10');

test('keeps only the even numbers, in order', async () => {
  const { evensOnly } = await load('evensOnly');
  assertCalls(evensOnly, [
    [[[1, 2, 3, 4, 5, 6]], [2, 4, 6]],
    [[[10, 7, 8]], [10, 8]],
    [[[-2, 0, 7]], [-2, 0]],
  ]);
});

test('returns an empty array when nothing is even', async () => {
  const { evensOnly } = await load('evensOnly');
  assertCalls(evensOnly, [
    [[[1, 3, 5]], []],
    [[[]], []],
  ]);
});

test("doesn't change the array it received", async () => {
  const { evensOnly } = await load('evensOnly');
  const numbers = [1, 2, 3, 4];
  evensOnly(numbers);
  assert.deepEqual(numbers, [1, 2, 3, 4], 'The original array was changed.');
});

test('builds the array with a loop', async () => {
  assert.doesNotMatch(await code(), /\.filter\(/, "Don't use filter: you'll learn it in module 08.");
});
