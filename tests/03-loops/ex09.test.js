import { test } from 'node:test';
import assert from 'node:assert/strict';
import { assertCalls, exercise } from '../helpers.js';

const { load, code } = exercise('03-loops/ex09');

test('finds the first multiple', async () => {
  const { firstMultiple } = await load('firstMultiple');
  assertCalls(firstMultiple, [
    [[10, 7], 14],
    [[50, 13], 52],
    [[1, 4], 4],
  ]);
});

test('the start itself counts when it is a multiple', async () => {
  const { firstMultiple } = await load('firstMultiple');
  assertCalls(firstMultiple, [
    [[14, 7], 14],
    [[9, 1], 9],
  ]);
});

test('uses break', async () => {
  assert.match(await code(), /\bbreak\b/, 'Stop the loop with break.');
});
