import { test } from 'node:test';
import assert from 'node:assert/strict';
import { assertCalls, exercise } from '../helpers.js';

const { load, code } = exercise('04-strings/ex04');

test('removes the spaces around the email', async () => {
  const { normalizeEmail } = await load('normalizeEmail');
  assertCalls(normalizeEmail, [
    [['  ada@example.com  '], 'ada@example.com'],
    [['\tbob@mail.com\n'], 'bob@mail.com'],
  ]);
});

test('lowercases the email', async () => {
  const { normalizeEmail } = await load('normalizeEmail');
  assertCalls(normalizeEmail, [
    [['Grace@Navy.MIL'], 'grace@navy.mil'],
    [['  Ada@Example.COM '], 'ada@example.com'],
    [['ok@ok.com'], 'ok@ok.com'],
  ]);
});

test('uses .trim() and .toLowerCase()', async () => {
  const source = await code();
  assert.match(source, /\.trim\(\)/, 'Use .trim().');
  assert.match(source, /\.toLowerCase\(\)/, 'Use .toLowerCase().');
});
