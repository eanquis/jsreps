import { test } from 'node:test';
import assert from 'node:assert/strict';
import { assertCalls, exercise } from '../helpers.js';

const { load } = exercise('05-arrays/ex16');

test('removes the item at the index', async () => {
  const { removeAt } = await load('removeAt');
  assertCalls(removeAt, [
    [[['a', 'b', 'c'], 1], ['a', 'c']],
    [[['a', 'b', 'c'], 0], ['b', 'c']],
    [[['a', 'b', 'c'], 2], ['a', 'b']],
    [[['only'], 0], []],
  ]);
});

test("doesn't change the array it received", async () => {
  const { removeAt } = await load('removeAt');
  const list = ['a', 'b', 'c'];
  removeAt(list, 1);
  assert.deepEqual(list, ['a', 'b', 'c'], 'The original array was changed. Work on a copy.');
});
