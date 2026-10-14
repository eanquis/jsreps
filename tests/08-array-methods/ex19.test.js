import { test } from 'node:test';
import assert from 'node:assert/strict';
import { assertCalls, exercise } from '../helpers.js';

const { load, code } = exercise('08-array-methods/ex19');

test('groups words by their first letter, in order', async () => {
  const { groupByFirstLetter } = await load('groupByFirstLetter');
  assertCalls(groupByFirstLetter, [
    [[['apple', 'banana', 'avocado']], { a: ['apple', 'avocado'], b: ['banana'] }],
    [[['cat', 'car', 'cow']], { c: ['cat', 'car', 'cow'] }],
    [[['x', 'y']], { x: ['x'], y: ['y'] }],
  ]);
});

test('an empty list gives an empty object', async () => {
  const { groupByFirstLetter } = await load('groupByFirstLetter');
  assertCalls(groupByFirstLetter, [[[[]], {}]]);
});

test('uses reduce', async () => {
  assert.match(await code(), /\.reduce\s*\(/, 'Use .reduce().');
});

test('uses no loops', async () => {
  assert.doesNotMatch(await code(), /\b(for|while)\s*\(/, 'Use array methods instead of for/while loops.');
});
