import { test } from 'node:test';
import assert from 'node:assert/strict';
import { assertCalls, exercise } from '../helpers.js';

const { load, code } = exercise('04-strings/ex08');

test('an @ in the middle is valid', async () => {
  const { hasValidAt } = await load('hasValidAt');
  assertCalls(hasValidAt, [
    [['ada@example.com'], true],
    [['a@b'], true],
  ]);
});

test('a missing @, or an @ at the start or the end, is invalid', async () => {
  const { hasValidAt } = await load('hasValidAt');
  assertCalls(hasValidAt, [
    [['ada.example.com'], false],
    [['@example.com'], false],
    [['ada@'], false],
  ]);
});

test('uses .indexOf()', async () => {
  assert.match(await code(), /\.indexOf\(/);
});
