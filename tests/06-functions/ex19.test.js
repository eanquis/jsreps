import { test } from 'node:test';
import assert from 'node:assert/strict';
import { assertCalls, exercise } from '../helpers.js';

const { load, code } = exercise('06-functions/ex19');

test('counting down from 0 is just the liftoff', async () => {
  const { countdown } = await load('countdown');
  assertCalls(countdown, [[[0], 'Liftoff!']]);
});

test('counts down from n', async () => {
  const { countdown } = await load('countdown');
  assertCalls(countdown, [
    [[1], '1 Liftoff!'],
    [[3], '3 2 1 Liftoff!'],
    [[10], '10 9 8 7 6 5 4 3 2 1 Liftoff!'],
  ]);
});

test('uses recursion, without loops', async () => {
  const source = await code();
  assert.doesNotMatch(source, /\b(for|while)\b/, "Don't use loops in this exercise.");
  const calls = source.match(/(?<!function\s+)\bcountdown\s*\(/g) ?? [];
  assert.ok(calls.length > 0, 'countdown should call itself.');
});
