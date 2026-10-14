import { test } from 'node:test';
import assert from 'node:assert/strict';
import { assertCalls, exercise } from '../helpers.js';

const { load, code } = exercise('02-conditionals/ex05');

test('even numbers', async () => {
  const { parity } = await load('parity');
  assertCalls(parity, [
    [[0], 'even'],
    [[2], 'even'],
    [[10], 'even'],
    [[-4], 'even'],
  ]);
});

test('odd numbers', async () => {
  const { parity } = await load('parity');
  assertCalls(parity, [
    [[1], 'odd'],
    [[7], 'odd'],
    [[99], 'odd'],
    [[-3], 'odd'],
  ]);
});

test('uses %', async () => {
  assert.match(await code(), /%/);
});
