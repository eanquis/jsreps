import { test } from 'node:test';
import assert from 'node:assert/strict';
import { assertCalls, exercise } from '../helpers.js';

const { load, code } = exercise('05-arrays/ex19');

test('keeps the first appearance of each value', async () => {
  const { unique } = await load('unique');
  assertCalls(unique, [
    [[[1, 2, 2, 3, 1]], [1, 2, 3]],
    [[['b', 'a', 'b', 'c', 'a']], ['b', 'a', 'c']],
    [[[7, 7, 7]], [7]],
  ]);
});

test('lists without duplicates stay the same', async () => {
  const { unique } = await load('unique');
  assertCalls(unique, [
    [[[1, 2, 3]], [1, 2, 3]],
    [[[]], []],
  ]);
});

test('different types are different values', async () => {
  const { unique } = await load('unique');
  assertCalls(unique, [[[[1, '1', 1]], [1, '1']]]);
});

test("doesn't change the array it received", async () => {
  const { unique } = await load('unique');
  const list = [1, 1, 2];
  unique(list);
  assert.deepEqual(list, [1, 1, 2], 'The original array was changed.');
});

test('works by hand, without Set or filter', async () => {
  const source = await code();
  assert.doesNotMatch(source, /\bSet\b/, "Don't use Set in this exercise.");
  assert.doesNotMatch(source, /\.(filter|reduce|forEach)\(/, 'Use a loop for this one.');
});
