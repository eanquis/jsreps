import { test } from 'node:test';
import assert from 'node:assert/strict';
import { assertCalls, exercise } from '../helpers.js';

const { load, code } = exercise('08-array-methods/ex02');

test('adds up all the numbers', async () => {
  const { sumWithForEach } = await load('sumWithForEach');
  assertCalls(sumWithForEach, [
    [[[1, 2, 3]], 6],
    [[[10, -4]], 6],
    [[[7]], 7],
    [[[]], 0],
  ]);
});

test('uses forEach, without loops or reduce', async () => {
  const source = await code();
  assert.match(source, /\.forEach\s*\(/, 'Use .forEach().');
  assert.doesNotMatch(source, /\b(for|while)\s*\(/, "Don't use for/while loops.");
  assert.doesNotMatch(source, /\.reduce\s*\(/, "Don't use .reduce() here.");
});
