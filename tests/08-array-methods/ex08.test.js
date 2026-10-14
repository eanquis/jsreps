import { test } from 'node:test';
import assert from 'node:assert/strict';
import { assertCalls, exercise } from '../helpers.js';

const { load, code } = exercise('08-array-methods/ex08');

test('hasAdult is true when at least one age is 18 or more', async () => {
  const { hasAdult } = await load('hasAdult');
  assertCalls(hasAdult, [
    [[[10, 12, 18]], true],
    [[[40]], true],
    [[[10, 17]], false],
    [[[]], false],
  ]);
});

test('allPassed is true when every score is 60 or more', async () => {
  const { allPassed } = await load('allPassed');
  assertCalls(allPassed, [
    [[[60, 75, 100]], true],
    [[[90, 59]], false],
    [[[10]], false],
  ]);
});

test('allPassed is true for an empty list: nobody failed', async () => {
  const { allPassed } = await load('allPassed');
  assertCalls(allPassed, [[[[]], true]]);
});

test('uses some and every', async () => {
  const source = await code();
  assert.match(source, /\.some\s*\(/, 'Use .some() in hasAdult.');
  assert.match(source, /\.every\s*\(/, 'Use .every() in allPassed.');
});
