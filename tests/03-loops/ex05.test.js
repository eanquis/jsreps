import { test } from 'node:test';
import assert from 'node:assert/strict';
import { assertCalls, exercise } from '../helpers.js';

const { load, code } = exercise('03-loops/ex05');

test('multiplies the base by itself', async () => {
  const { power } = await load('power');
  assertCalls(power, [
    [[2, 3], 8],
    [[3, 2], 9],
    [[10, 4], 10000],
    [[5, 1], 5],
    [[-2, 3], -8],
  ]);
});

test('anything to the power of 0 is 1', async () => {
  const { power } = await load('power');
  assertCalls(power, [
    [[7, 0], 1],
    [[0, 0], 1],
  ]);
});

test('uses a loop, without ** or Math', async () => {
  const source = await code();
  assert.match(source, /\b(for|while)\s*\(/, 'Use a loop.');
  assert.doesNotMatch(source, /\*\*/, "Don't use **.");
  assert.doesNotMatch(source, /\bMath\b/, "Don't use Math.");
});
