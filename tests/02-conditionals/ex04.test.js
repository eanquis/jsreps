import { test } from 'node:test';
import assert from 'node:assert/strict';
import { assertCalls, exercise } from '../helpers.js';

const { load, code } = exercise('02-conditionals/ex04');

test('below 10 is cold', async () => {
  const { temperatureLabel } = await load('temperatureLabel');
  assertCalls(temperatureLabel, [
    [[-5], 'cold'],
    [[0], 'cold'],
    [[9], 'cold'],
  ]);
});

test('from 10 up to 25 is mild', async () => {
  const { temperatureLabel } = await load('temperatureLabel');
  assertCalls(temperatureLabel, [
    [[10], 'mild'],
    [[18], 'mild'],
    [[24], 'mild'],
  ]);
});

test('25 or more is hot', async () => {
  const { temperatureLabel } = await load('temperatureLabel');
  assertCalls(temperatureLabel, [
    [[25], 'hot'],
    [[40], 'hot'],
  ]);
});

test('uses else if', async () => {
  assert.match(await code(), /\belse\s+if\b/);
});
