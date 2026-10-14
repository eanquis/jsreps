import { test } from 'node:test';
import assert from 'node:assert/strict';
import { assertCalls, exercise } from '../helpers.js';

const { load, code } = exercise('05-arrays/ex07');

test('counts how many times the target appears', async () => {
  const { countMatches } = await load('countMatches');
  assertCalls(countMatches, [
    [[['a', 'b', 'a', 'c', 'a'], 'a'], 3],
    [[[1, 2, 3, 2], 2], 2],
    [[[7], 7], 1],
  ]);
});

test('returns 0 when the target is missing', async () => {
  const { countMatches } = await load('countMatches');
  assertCalls(countMatches, [
    [[['a', 'b'], 'z'], 0],
    [[[1, 2, 3], '1'], 0],
    [[[], 'a'], 0],
  ]);
});

test('uses for...of', async () => {
  const source = await code();
  assert.match(source, /for\s*\(\s*(const|let)\s+\w+\s+of\b/, 'Use for (const item of list).');
  assert.doesNotMatch(source, /\.(filter|reduce|forEach)\(/, 'Use a loop for this one.');
});
