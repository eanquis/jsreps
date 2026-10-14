import { test } from 'node:test';
import assert from 'node:assert/strict';
import { assertCalls, exercise } from '../helpers.js';

const { load, code } = exercise('07-objects/ex08');

test('adds up every score', async () => {
  const { totalScore } = await load('totalScore');
  assertCalls(totalScore, [
    [[{ ada: 10, grace: 7 }], 17],
    [[{ ada: 5, grace: 0, linus: 12 }], 17],
    [[{ solo: 42 }], 42],
  ]);
});

test('no players means 0 points', async () => {
  const { totalScore } = await load('totalScore');
  assertCalls(totalScore, [[[{}], 0]]);
});

test('uses for...in', async () => {
  assert.match(await code(), /for\s*\(\s*(const|let)\s+\w+\s+in\b/, 'Use for (const key in scores).');
});
