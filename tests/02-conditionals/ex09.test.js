import { test } from 'node:test';
import assert from 'node:assert/strict';
import { assertCalls, exercise } from '../helpers.js';

const { load, code } = exercise('02-conditionals/ex09');

test('raining outside: take an umbrella', async () => {
  const { needsUmbrella } = await load('needsUmbrella');
  assertCalls(needsUmbrella, [[[true, false], true]]);
});

test('otherwise, no umbrella', async () => {
  const { needsUmbrella } = await load('needsUmbrella');
  assertCalls(needsUmbrella, [
    [[true, true], false],
    [[false, false], false],
    [[false, true], false],
  ]);
});

test('uses !', async () => {
  assert.match(await code(), /![^=]/, 'Use ! to flip a boolean.');
});
