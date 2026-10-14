import { test } from 'node:test';
import assert from 'node:assert/strict';
import { assertCalls, exercise } from '../helpers.js';

const { load, code } = exercise('06-functions/ex09');

test('divides a by b', async () => {
  const { safeDivide } = await load('safeDivide');
  assertCalls(safeDivide, [
    [[10, 2], 5],
    [[1, 4], 0.25],
    [[0, 5], 0],
    [[-9, 3], -3],
  ]);
});

test('returns null when dividing by zero', async () => {
  const { safeDivide } = await load('safeDivide');
  assertCalls(safeDivide, [
    [[1, 0], null],
    [[0, 0], null],
  ]);
});

test('uses an early return instead of else', async () => {
  assert.doesNotMatch(await code(), /\belse\b/, 'Return early from the special case, without else.');
});
