import { test } from 'node:test';
import assert from 'node:assert/strict';
import { assertCalls, exercise } from '../helpers.js';

const { load, code } = exercise('07-objects/ex13');

test('adds price × quantity of every item', async () => {
  const { cartTotal } = await load('cartTotal');
  assertCalls(cartTotal, [
    [[[{ name: 'pen', price: 2, quantity: 3 }]], 6],
    [
      [
        [
          { name: 'pen', price: 2, quantity: 3 },
          { name: 'notebook', price: 5, quantity: 2 },
          { name: 'eraser', price: 1, quantity: 1 },
        ],
      ],
      17,
    ],
    [[[{ name: 'bag', price: 30, quantity: 0 }]], 0],
  ]);
});

test('an empty cart costs 0', async () => {
  const { cartTotal } = await load('cartTotal');
  assertCalls(cartTotal, [[[[]], 0]]);
});

test('uses a loop instead of reduce', async () => {
  assert.doesNotMatch(await code(), /\.(reduce|map|forEach)\(/, 'Use a loop: array methods come in a later module.');
});
