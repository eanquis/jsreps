import { test } from 'node:test';
import assert from 'node:assert/strict';
import { assertCalls, exercise } from '../helpers.js';

const { load, code } = exercise('04-strings/ex14');

test('counts how many times the character appears', async () => {
  const { countChar } = await load('countChar');
  assertCalls(countChar, [
    [['banana', 'a'], 3],
    [['mississippi', 's'], 4],
    [['hello', 'l'], 2],
  ]);
});

test('returns 0 when the character is not there', async () => {
  const { countChar } = await load('countChar');
  assertCalls(countChar, [
    [['banana', 'z'], 0],
    [['', 'a'], 0],
  ]);
});

test('uppercase and lowercase are different characters', async () => {
  const { countChar } = await load('countChar');
  assertCalls(countChar, [[['Banana', 'b'], 0]]);
});

test('uses a loop', async () => {
  assert.match(await code(), /\b(for|while)\b/);
});
