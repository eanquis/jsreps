import { test } from 'node:test';
import assert from 'node:assert/strict';
import { assertCalls, exercise } from '../helpers.js';

const { load, code } = exercise('04-strings/ex13');

test('single digits get a leading zero', async () => {
  const { formatTime } = await load('formatTime');
  assertCalls(formatTime, [
    [[9, 5], '09:05'],
    [[0, 0], '00:00'],
    [[23, 9], '23:09'],
  ]);
});

test('two digits stay as they are', async () => {
  const { formatTime } = await load('formatTime');
  assertCalls(formatTime, [
    [[12, 30], '12:30'],
    [[10, 45], '10:45'],
  ]);
});

test('uses .padStart()', async () => {
  assert.match(await code(), /\.padStart\(/);
});
