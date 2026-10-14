import { test } from 'node:test';
import assert from 'node:assert/strict';
import { assertCalls, exercise } from '../helpers.js';

const { load, code } = exercise('05-arrays/ex13');

const items = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];

test('returns the items of each page', async () => {
  const { page } = await load('page');
  assertCalls(page, [
    [[items, 1, 3], ['a', 'b', 'c']],
    [[items, 2, 3], ['d', 'e', 'f']],
    [[items, 1, 5], ['a', 'b', 'c', 'd', 'e']],
  ]);
});

test('the last page can be shorter', async () => {
  const { page } = await load('page');
  assertCalls(page, [
    [[items, 3, 3], ['g']],
    [[items, 2, 5], ['f', 'g']],
  ]);
});

test('a page past the end is empty', async () => {
  const { page } = await load('page');
  assertCalls(page, [
    [[items, 4, 3], []],
    [[[], 1, 10], []],
  ]);
});

test("doesn't change the array it received, and uses slice", async () => {
  const { page } = await load('page');
  const list = [1, 2, 3, 4];
  page(list, 1, 2);
  assert.deepEqual(list, [1, 2, 3, 4], 'The original array was changed.');
  assert.match(await code(), /\.slice\(/, 'Use slice().');
});
