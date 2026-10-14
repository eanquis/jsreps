import { test } from 'node:test';
import assert from 'node:assert/strict';
import { assertCalls, exercise } from '../helpers.js';

const { load, code } = exercise('05-arrays/ex08');

test('finds the biggest number', async () => {
  const { max } = await load('max');
  assertCalls(max, [
    [[[3, 9, 2]], 9],
    [[[9, 3, 2]], 9],
    [[[2, 3, 9]], 9],
    [[[5]], 5],
    [[[4, 4, 4]], 4],
  ]);
});

test('works with negative numbers', async () => {
  const { max } = await load('max');
  assertCalls(max, [
    [[[-8, -3, -12]], -3],
    [[[-1, 0, -5]], 0],
  ]);
});

test('finds it by hand, without Math or sort', async () => {
  const source = await code();
  assert.doesNotMatch(source, /\bMath\b/, "Don't use Math in this exercise.");
  assert.doesNotMatch(source, /\.(sort|reduce)\(/, 'Use a loop for this one.');
});
