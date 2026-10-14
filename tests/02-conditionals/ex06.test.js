import { test } from 'node:test';
import assert from 'node:assert/strict';
import { assertCalls, exercise } from '../helpers.js';

const { load } = exercise('02-conditionals/ex06');

test('zero is zero', async () => {
  const { isZero } = await load('isZero');
  assertCalls(isZero, [[[0], true]]);
});

test('other numbers are not zero', async () => {
  const { isZero } = await load('isZero');
  assertCalls(isZero, [
    [[1], false],
    [[-1], false],
    [[100], false],
  ]);
});
