import { test } from 'node:test';
import assert from 'node:assert/strict';
import { assertCalls, assertThrows, exercise } from '../helpers.js';

const { load, code } = exercise('09-errors/ex05');

test('applies the discount', async () => {
  const { discountedPrice } = await load('discountedPrice');
  assertCalls(discountedPrice, [
    [[100, 20], 80],
    [[50, 0], 50],
    [[80, 100], 0],
    [[10, 50], 5],
  ]);
});

test('price must be a number', async () => {
  const { discountedPrice } = await load('discountedPrice');
  const expected = { name: 'TypeError', message: 'price must be a number' };
  assertThrows(discountedPrice, ['100', 20], expected);
  assertThrows(discountedPrice, [undefined, 'oops'], expected);
});

test('percent must be a number', async () => {
  const { discountedPrice } = await load('discountedPrice');
  const expected = { name: 'TypeError', message: 'percent must be a number' };
  assertThrows(discountedPrice, [100, '20'], expected);
  assertThrows(discountedPrice, [100, null], expected);
});

test('percent must be between 0 and 100', async () => {
  const { discountedPrice } = await load('discountedPrice');
  const expected = { name: 'RangeError', message: 'percent must be between 0 and 100' };
  assertThrows(discountedPrice, [100, -1], expected);
  assertThrows(discountedPrice, [100, 101], expected);
});

test('uses guard clauses, without else', async () => {
  assert.doesNotMatch(await code(), /\belse\b/, "Don't use else: throw at the top and keep going.");
});
