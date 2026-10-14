import { test } from 'node:test';
import assert from 'node:assert/strict';
import { assertCalls, exercise } from '../helpers.js';

const { load } = exercise('05-arrays/ex02');

test('`first` returns the first item', async () => {
  const { first } = await load('first');
  assertCalls(first, [
    [[['a', 'b', 'c']], 'a'],
    [[[42]], 42],
    [[[]], undefined],
  ]);
});

test('`last` returns the last item, whatever the size', async () => {
  const { last } = await load('last');
  assertCalls(last, [
    [[['a', 'b', 'c']], 'c'],
    [[[1, 2, 3, 4, 5, 6]], 6],
    [[[42]], 42],
    [[[]], undefined],
  ]);
});
