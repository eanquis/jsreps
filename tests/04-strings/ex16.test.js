import { test } from 'node:test';
import assert from 'node:assert/strict';
import { assertCalls, exercise } from '../helpers.js';

const { load, code } = exercise('04-strings/ex16');

test('reverses the text', async () => {
  const { reverse } = await load('reverse');
  assertCalls(reverse, [
    [['hello'], 'olleh'],
    [['ab'], 'ba'],
    [['a'], 'a'],
  ]);
});

test('an empty text stays empty', async () => {
  const { reverse } = await load('reverse');
  assertCalls(reverse, [[[''], '']]);
});

test('still uses the loop', async () => {
  assert.match(await code(), /\bfor\s*\(/, 'Keep the for loop and fix it.');
});
