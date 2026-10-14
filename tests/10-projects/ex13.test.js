import { test } from 'node:test';
import assert from 'node:assert/strict';
import { assertCalls, exercise } from '../helpers.js';

const { load, code } = exercise('10-projects/ex13');

test('flattens arrays at any depth', async () => {
  const { flatten } = await load('flatten');
  assertCalls(flatten, [
    [[[1, [2, 3]]], [1, 2, 3]],
    [[[1, [2, [3, [4]]], 5]], [1, 2, 3, 4, 5]],
    [[[[['deep']], 'shallow']], ['deep', 'shallow']],
  ]);
});

test('keeps flat and empty arrays as they are', async () => {
  const { flatten } = await load('flatten');
  assertCalls(flatten, [
    [[[1, 2, 3]], [1, 2, 3]],
    [[[]], []],
    [[[[], [[]]]], []],
  ]);
});

test("doesn't use .flat()", async () => {
  assert.doesNotMatch(await code(), /\.flat\s*\(/, 'Build it yourself instead of using .flat().');
});
