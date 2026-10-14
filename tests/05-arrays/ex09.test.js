import { test } from 'node:test';
import assert from 'node:assert/strict';
import { assertCalls, exercise } from '../helpers.js';

const { load, code } = exercise('05-arrays/ex09');

test('returns the average of the numbers', async () => {
  const { average } = await load('average');
  assertCalls(average, [
    [[[2, 4, 6]], 4],
    [[[1, 2]], 1.5],
    [[[5]], 5],
    [[[-3, 3]], 0],
  ]);
});

test('an empty list averages to 0', async () => {
  const { average } = await load('average');
  assertCalls(average, [[[[]], 0]]);
});

test('anything that is not an array averages to 0', async () => {
  const { average } = await load('average');
  assertCalls(average, [
    [['hello'], 0],
    [[42], 0],
    [[undefined], 0],
    [[null], 0],
  ]);
});

test('uses Array.isArray', async () => {
  assert.match(await code(), /Array\.isArray\(/);
});
