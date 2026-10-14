import { test } from 'node:test';
import assert from 'node:assert/strict';
import { assertCalls, exercise } from '../helpers.js';

const { load, code } = exercise('08-array-methods/ex05');

test('keeps the words with at least minLength characters', async () => {
  const { longWords } = await load('longWords');
  assertCalls(longWords, [
    [[['hi', 'hello', 'hey', 'greetings'], 4], ['hello', 'greetings']],
    [[['cat', 'dog', 'horse'], 3], ['cat', 'dog', 'horse']],
    [[['cat', 'dog'], 10], []],
    [[[], 2], []],
  ]);
});

test('uses filter', async () => {
  assert.match(await code(), /\.filter\s*\(/, 'Use .filter().');
});

test('uses no loops', async () => {
  assert.doesNotMatch(await code(), /\b(for|while)\s*\(/, 'Use array methods instead of for/while loops.');
});
