import { test } from 'node:test';
import assert from 'node:assert/strict';
import { assertCalls, assertThrows, exercise } from '../helpers.js';

const { load } = exercise('09-errors/ex04');

test('accepts levels from 0 to 10', async () => {
  const { setVolume } = await load('setVolume');
  assertCalls(setVolume, [
    [[0], 'Volume: 0'],
    [[7], 'Volume: 7'],
    [[10], 'Volume: 10'],
  ]);
});

test('throws a RangeError outside 0-10', async () => {
  const { setVolume } = await load('setVolume');
  const expected = { name: 'RangeError', message: 'Volume must be between 0 and 10' };
  assertThrows(setVolume, [-1], expected);
  assertThrows(setVolume, [11], expected);
  assertThrows(setVolume, [100], expected);
});
