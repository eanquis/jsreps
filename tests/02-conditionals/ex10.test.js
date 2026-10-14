import { test } from 'node:test';
import assert from 'node:assert/strict';
import { assertCalls, exercise } from '../helpers.js';

const { load } = exercise('02-conditionals/ex10');

test('values from 0 to 100 are valid', async () => {
  const { isValidPercentage } = await load('isValidPercentage');
  assertCalls(isValidPercentage, [
    [[0], true],
    [[50], true],
    [[99.5], true],
    [[100], true],
  ]);
});

test('values outside the range are invalid', async () => {
  const { isValidPercentage } = await load('isValidPercentage');
  assertCalls(isValidPercentage, [
    [[-1], false],
    [[100.1], false],
    [[101], false],
    [[1000], false],
  ]);
});
