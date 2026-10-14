import { test } from 'node:test';
import assert from 'node:assert/strict';
import { assertCalls, assertThrows, exercise } from '../helpers.js';

const { load } = exercise('09-errors/ex03');

test('squares numbers', async () => {
  const { square } = await load('square');
  assertCalls(square, [
    [[3], 9],
    [[-4], 16],
    [[0], 0],
    [[1.5], 2.25],
  ]);
});

test('throws a TypeError for anything that is not a number', async () => {
  const { square } = await load('square');
  const expected = { name: 'TypeError', message: 'n must be a number' };
  assertThrows(square, ['3'], expected);
  assertThrows(square, [undefined], expected);
  assertThrows(square, [null], expected);
  assertThrows(square, [true], expected);
});
