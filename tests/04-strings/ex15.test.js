import { test } from 'node:test';
import assert from 'node:assert/strict';
import { assertCalls, exercise } from '../helpers.js';

const { load, code } = exercise('04-strings/ex15');

test('counts the vowels', async () => {
  const { countVowels } = await load('countVowels');
  assertCalls(countVowels, [
    [['hello'], 2],
    [['javascript'], 3],
    [['aeiou'], 5],
  ]);
});

test('counts uppercase vowels too', async () => {
  const { countVowels } = await load('countVowels');
  assertCalls(countVowels, [
    [['HELLO'], 2],
    [['Ada Lovelace'], 6],
  ]);
});

test('returns 0 when there are no vowels', async () => {
  const { countVowels } = await load('countVowels');
  assertCalls(countVowels, [
    [['rhythm'], 0],
    [[''], 0],
  ]);
});

test('uses a loop', async () => {
  assert.match(await code(), /\b(for|while)\b/);
});
