import { test } from 'node:test';
import assert from 'node:assert/strict';
import { assertCalls, exercise } from '../helpers.js';

const { load } = exercise('10-projects/ex18');

test('calculates single numbers, sums and products', async () => {
  const { calculate } = await load('calculate');
  assertCalls(calculate, [
    [['7'], 7],
    [['0'], 0],
    [['2 + 3'], 5],
    [['2 * 3'], 6],
    [['1 + 2 + 3 + 4'], 10],
    [['10 * 10 * 10'], 1000],
  ]);
});

test('multiplies before adding', async () => {
  const { calculate } = await load('calculate');
  assertCalls(calculate, [
    [['3 + 4 * 2'], 11],
    [['2 * 3 + 4'], 10],
    [['1 + 2 * 3 + 4 * 5'], 27],
    [['12 * 0 + 5'], 5],
  ]);
});

test('throws on invalid expressions', async () => {
  const { calculate } = await load('calculate');
  for (const expression of ['', '2 - 1', 'two + 2', '3 +', '4 / 2', '+']) {
    assert.throws(
      () => calculate(expression),
      { message: 'Invalid expression' },
      `calculate(${JSON.stringify(expression)}) should throw "Invalid expression".`,
    );
  }
});
