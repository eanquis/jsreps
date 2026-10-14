import { test } from 'node:test';
import assert from 'node:assert/strict';
import { assertCalls, exercise } from '../helpers.js';

const { load, code } = exercise('06-functions/ex18');

test('factorials of 0 and 1 are 1', async () => {
  const { factorial } = await load('factorial');
  assertCalls(factorial, [
    [[0], 1],
    [[1], 1],
  ]);
});

test('factorials of bigger numbers', async () => {
  const { factorial } = await load('factorial');
  assertCalls(factorial, [
    [[2], 2],
    [[4], 24],
    [[5], 120],
    [[10], 3628800],
  ]);
});

test('uses recursion, without loops', async () => {
  const source = await code();
  assert.doesNotMatch(source, /\b(for|while)\b/, "Don't use loops in this exercise.");
  const calls = source.match(/(?<!function\s+)\bfactorial\s*\(/g) ?? [];
  assert.ok(calls.length > 0, 'factorial should call itself.');
});
