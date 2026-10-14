import { test } from 'node:test';
import assert from 'node:assert/strict';
import { assertCalls, exercise } from '../helpers.js';

const { load } = exercise('07-objects/ex18');

test('returns the product with the discounted price', async () => {
  const { applyDiscount } = await load('applyDiscount');
  assertCalls(applyDiscount, [
    [[{ name: 'shoes', price: 100 }, 20], { name: 'shoes', price: 80 }],
    [[{ name: 'hat', price: 30, color: 'red' }, 50], { name: 'hat', price: 15, color: 'red' }],
    [[{ name: 'pen', price: 2 }, 0], { name: 'pen', price: 2 }],
  ]);
});

test('the original product is not changed', async () => {
  const { applyDiscount } = await load('applyDiscount');
  const product = { name: 'shoes', price: 100 };
  applyDiscount(product, 20);
  assert.deepEqual(product, { name: 'shoes', price: 100 }, 'The original product should still cost 100.');
});

test('applying the same discount twice gives the same result', async () => {
  const { applyDiscount } = await load('applyDiscount');
  const product = { name: 'shoes', price: 100 };
  applyDiscount(product, 20);
  assert.deepEqual(applyDiscount(product, 20), { name: 'shoes', price: 80 });
});
