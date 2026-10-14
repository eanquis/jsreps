import { test } from 'node:test';
import assert from 'node:assert/strict';
import { assertCalls, exercise } from '../helpers.js';

const { load } = exercise('03-loops/ex08');

test('counts the halvings until n is below 1', async () => {
  const { halvings } = await load('halvings');
  assertCalls(halvings, [
    [[8], 4],
    [[1], 1],
    [[10], 4],
    [[100], 7],
  ]);
});

test('numbers already below 1 need no halvings', async () => {
  const { halvings } = await load('halvings');
  assertCalls(halvings, [
    [[0.5], 0],
    [[0], 0],
  ]);
});
