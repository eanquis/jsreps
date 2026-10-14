import { test } from 'node:test';
import assert from 'node:assert/strict';
import { assertCalls, exercise } from '../helpers.js';

const { load, code } = exercise('04-strings/ex03');

test('shouts the text', async () => {
  const { shout } = await load('shout');
  assertCalls(shout, [
    [['hello'], 'HELLO!'],
    [['Stop'], 'STOP!'],
    [['ALREADY LOUD'], 'ALREADY LOUD!'],
    [[''], '!'],
  ]);
});

test('uses .toUpperCase()', async () => {
  assert.match(await code(), /\.toUpperCase\(\)/);
});
