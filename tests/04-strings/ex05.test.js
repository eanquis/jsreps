import { test } from 'node:test';
import assert from 'node:assert/strict';
import { assertCalls, exercise } from '../helpers.js';

const { load, code } = exercise('04-strings/ex05');

test('the same word in different cases is the same word', async () => {
  const { sameWord } = await load('sameWord');
  assertCalls(sameWord, [
    [['Hello', 'hello'], true],
    [['HELLO', 'hElLo'], true],
    [['cat', 'cat'], true],
  ]);
});

test('different words are different', async () => {
  const { sameWord } = await load('sameWord');
  assertCalls(sameWord, [
    [['cat', 'dog'], false],
    [['cat', 'cats'], false],
    [['Cat', 'cart'], false],
  ]);
});

test('changes the case before comparing', async () => {
  assert.match(await code(), /\.to(Lower|Upper)Case\(\)/, 'Use .toLowerCase() or .toUpperCase().');
});
