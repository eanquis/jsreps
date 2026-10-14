import { test } from 'node:test';
import assert from 'node:assert/strict';
import { assertCalls, exercise } from '../helpers.js';

const { load, code } = exercise('03-loops/ex02');

test('adds the numbers from 1 to n', async () => {
  const { sumUpTo } = await load('sumUpTo');
  assertCalls(sumUpTo, [
    [[1], 1],
    [[4], 10],
    [[10], 55],
    [[100], 5050],
  ]);
});

test('the sum up to 0 is 0', async () => {
  const { sumUpTo } = await load('sumUpTo');
  assertCalls(sumUpTo, [[[0], 0]]);
});

test('uses a while loop', async () => {
  assert.match(await code(), /\bwhile\s*\(/, 'Use a while loop.');
});
