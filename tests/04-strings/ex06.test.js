import { test } from 'node:test';
import assert from 'node:assert/strict';
import { assertCalls, exercise } from '../helpers.js';

const { load, code } = exercise('04-strings/ex06');

test('messages with "free money" are spam', async () => {
  const { isSpam } = await load('isSpam');
  assertCalls(isSpam, [
    [['free money'], true],
    [['Get FREE MONEY now'], true],
    [['Free Money!!!'], true],
  ]);
});

test('other messages are not spam', async () => {
  const { isSpam } = await load('isSpam');
  assertCalls(isSpam, [
    [['Hello, how are you?'], false],
    [['money is not free'], false],
    [['free'], false],
  ]);
});

test('uses .includes()', async () => {
  assert.match(await code(), /\.includes\(/);
});
