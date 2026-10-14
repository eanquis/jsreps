import { test } from 'node:test';
import assert from 'node:assert/strict';
import { assertCalls, exercise } from '../helpers.js';

const { load, code } = exercise('05-arrays/ex12');

test('returns the items in reverse order', async () => {
  const { reverse } = await load('reverse');
  assertCalls(reverse, [
    [[[1, 2, 3]], [3, 2, 1]],
    [[['a', 'b', 'c', 'd']], ['d', 'c', 'b', 'a']],
    [[['only']], ['only']],
    [[[]], []],
  ]);
});

test("doesn't change the array it received", async () => {
  const { reverse } = await load('reverse');
  const list = [1, 2, 3];
  reverse(list);
  assert.deepEqual(list, [1, 2, 3], 'The original array was changed.');
});

test('reverses by hand', async () => {
  assert.doesNotMatch(await code(), /\.(reverse|toReversed)\(/, "Don't use reverse(): do it with a loop.");
});
