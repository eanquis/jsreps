import { test } from 'node:test';
import assert from 'node:assert/strict';
import { assertCalls, exercise } from '../helpers.js';

const { load } = exercise('10-projects/ex20');

async function newCart() {
  const { createCart } = await load('createCart');
  const cart = createCart();
  assert.equal(typeof cart, 'object', 'createCart should return an object.');
  return cart;
}

test('an empty cart has no items and costs nothing', async () => {
  const cart = await newCart();
  assert.equal(cart.itemCount(), 0);
  assert.equal(cart.total(), 0);
});

test('adds items, with a default quantity of 1', async () => {
  const cart = await newCart();
  cart.addItem('apple', 2, 3);
  cart.addItem('pear', 5);
  assert.equal(cart.itemCount(), 4, '3 apples and 1 pear make 4 items.');
  assert.equal(cart.total(), 11, '3 * 2 + 1 * 5 = 11.');
});

test('adding the same item again increases its quantity', async () => {
  const cart = await newCart();
  cart.addItem('apple', 2);
  cart.addItem('apple', 2, 4);
  assert.equal(cart.itemCount(), 5);
  assert.equal(cart.total(), 10);
});

test('removes items completely', async () => {
  const cart = await newCart();
  cart.addItem('apple', 2, 3);
  cart.addItem('pear', 5);
  cart.removeItem('apple');
  assert.equal(cart.itemCount(), 1);
  assert.equal(cart.total(), 5);
});

test("removing an item that isn't in the cart throws", async () => {
  const cart = await newCart();
  assert.throws(() => cart.removeItem('ghost'), { message: 'Item not in cart' });
});

test('discount codes reduce the total', async () => {
  const cart = await newCart();
  cart.addItem('book', 40);
  cart.addItem('pen', 10, 2);
  cart.applyDiscount('SAVE10');
  assert.equal(cart.total(), 54, '10% off 60 is 54.');
  cart.applyDiscount('HALF');
  assert.equal(cart.total(), 30, 'A new code replaces the previous one: 50% off 60 is 30.');
  cart.addItem('pen', 10);
  assert.equal(cart.total(), 35, 'The discount also applies to items added later.');
});

test('unknown discount codes throw', async () => {
  const cart = await newCart();
  cart.addItem('book', 40);
  assert.throws(() => cart.applyDiscount('FREE'), { message: 'Invalid discount code' });
  assert.equal(cart.total(), 40, 'An invalid code must not change the total.');
});

test('carts are independent', async () => {
  const first = await newCart();
  const second = await newCart();
  first.addItem('apple', 2);
  assert.equal(second.itemCount(), 0, 'Each cart needs its own items.');
});
