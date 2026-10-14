import { test } from 'node:test';
import assert from 'node:assert/strict';
import { assertCalls, exercise } from '../helpers.js';

const { load, code } = exercise('07-objects/ex12');

const products = [
  { name: 'pen', price: 2 },
  { name: 'notebook', price: 5 },
  { name: 'eraser', price: 1 },
];

test('finds the product by name', async () => {
  const { findProduct } = await load('findProduct');
  assertCalls(findProduct, [
    [[products, 'pen'], { name: 'pen', price: 2 }],
    [[products, 'eraser'], { name: 'eraser', price: 1 }],
  ]);
});

test('returns the object from the list itself', async () => {
  const { findProduct } = await load('findProduct');
  assert.equal(findProduct(products, 'notebook'), products[1]);
});

test('returns null when the product is not in the list', async () => {
  const { findProduct } = await load('findProduct');
  assertCalls(findProduct, [
    [[products, 'stapler'], null],
    [[[], 'pen'], null],
  ]);
});

test('uses a loop instead of array methods', async () => {
  assert.doesNotMatch(await code(), /\.(find|filter|findIndex|some)\(/, 'Use a loop: array methods come in a later module.');
});
