import { test } from 'node:test';
import assert from 'node:assert/strict';
import { assertCalls, exercise } from '../helpers.js';

const { load, code } = exercise('03-loops/ex13');

test('adds up the digits', async () => {
  const { sumDigits } = await load('sumDigits');
  assertCalls(sumDigits, [
    [[1234], 10],
    [[9999], 36],
    [[1000], 1],
    [[7], 7],
  ]);
});

test('the digits of 0 add up to 0', async () => {
  const { sumDigits } = await load('sumDigits');
  assertCalls(sumDigits, [[[0], 0]]);
});

test('uses a loop with % and Math.floor, without strings', async () => {
  const source = await code();
  assert.match(source, /\b(for|while)\s*\(/, 'Use a loop.');
  assert.match(source, /%/, 'Use % to get the last digit.');
  assert.match(source, /Math\.floor/, 'Use Math.floor to remove the last digit.');
  assert.doesNotMatch(source, /\bString\b|`|\+\s*''|''\s*\+/, "Don't convert the number to a string.");
});
