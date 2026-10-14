import { test } from 'node:test';
import assert from 'node:assert/strict';
import { assertCalls, assertThrows, exercise } from '../helpers.js';

const { load, code } = exercise('09-errors/ex02');

test('withdraws when there is enough money', async () => {
  const { withdraw } = await load('withdraw');
  assertCalls(withdraw, [
    [[100, 30], 70],
    [[50, 50], 0],
    [[10, 0], 10],
  ]);
});

test('throws when there is not enough money', async () => {
  const { withdraw } = await load('withdraw');
  const expected = { name: 'Error', message: 'Insufficient funds' };
  assertThrows(withdraw, [100, 101], expected);
  assertThrows(withdraw, [0, 5], expected);
});

test('uses throw new Error', async () => {
  assert.match(await code(), /throw\s+new\s+Error\s*\(/);
});
