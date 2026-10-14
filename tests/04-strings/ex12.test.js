import { test } from 'node:test';
import assert from 'node:assert/strict';
import { assertCalls, exercise } from '../helpers.js';

const { load, code } = exercise('04-strings/ex12');

test('hides every digit except the last 4', async () => {
  const { maskCard } = await load('maskCard');
  assertCalls(maskCard, [
    [['1234567812345678'], '************5678'],
    [['4000123499998888'], '************8888'],
    [['12345'], '*2345'],
  ]);
});

test('numbers with 4 digits stay visible', async () => {
  const { maskCard } = await load('maskCard');
  assertCalls(maskCard, [[['1234'], '1234']]);
});

test('uses .repeat() or .padStart()', async () => {
  assert.match(await code(), /\.(repeat|padStart)\(/);
});
