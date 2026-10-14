import { test } from 'node:test';
import assert from 'node:assert/strict';
import { assertCalls, exercise } from '../helpers.js';

const { load, code } = exercise('08-array-methods/ex12');

test('counts how many times each word appears', async () => {
  const { countOccurrences } = await load('countOccurrences');
  assertCalls(countOccurrences, [
    [[['a', 'b', 'a']], { a: 2, b: 1 }],
    [[['js', 'js', 'js']], { js: 3 }],
    [[['red', 'green', 'blue']], { red: 1, green: 1, blue: 1 }],
  ]);
});

test('an empty list gives an empty object', async () => {
  const { countOccurrences } = await load('countOccurrences');
  assertCalls(countOccurrences, [[[[]], {}]]);
});

test('uses reduce', async () => {
  assert.match(await code(), /\.reduce\s*\(/, 'Use .reduce().');
});

test('uses no loops', async () => {
  assert.doesNotMatch(await code(), /\b(for|while)\s*\(/, 'Use array methods instead of for/while loops.');
});
