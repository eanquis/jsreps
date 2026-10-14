import { test } from 'node:test';
import assert from 'node:assert/strict';
import { assertCalls, exercise } from '../helpers.js';

const { load, code } = exercise('03-loops/ex10');

test('skips the multiples of `skip`', async () => {
  const { sumSkipping } = await load('sumSkipping');
  assertCalls(sumSkipping, [
    [[10, 3], 37],
    [[10, 2], 25],
    [[5, 5], 10],
  ]);
});

test('skipping a number above n skips nothing', async () => {
  const { sumSkipping } = await load('sumSkipping');
  assertCalls(sumSkipping, [[[4, 10], 10]]);
});

test('uses continue', async () => {
  assert.match(await code(), /\bcontinue\b/, 'Skip numbers with continue.');
});
