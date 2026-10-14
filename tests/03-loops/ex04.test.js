import { test } from 'node:test';
import assert from 'node:assert/strict';
import { assertCalls, exercise } from '../helpers.js';

const { load, code } = exercise('03-loops/ex04');

test('counts down to liftoff', async () => {
  const { countdown } = await load('countdown');
  assertCalls(countdown, [
    [[3], '3... 2... 1... Liftoff!'],
    [[1], '1... Liftoff!'],
    [[5], '5... 4... 3... 2... 1... Liftoff!'],
  ]);
});

test('from 0, lifts off right away', async () => {
  const { countdown } = await load('countdown');
  assertCalls(countdown, [[[0], 'Liftoff!']]);
});

test('uses a loop', async () => {
  assert.match(await code(), /\b(for|while)\s*\(/, 'Use a loop.');
});
