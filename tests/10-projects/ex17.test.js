import { test } from 'node:test';
import { assertCalls, exercise } from '../helpers.js';

const { load } = exercise('10-projects/ex17');

test('orders enough to have twice the minimum', async () => {
  const { restockOrders } = await load('restockOrders');
  assertCalls(restockOrders, [
    [[[{ item: 'apples', quantity: 3, minimum: 10 }]], ['Order 17 apples']],
    [[[{ item: 'pears', quantity: 0, minimum: 4 }]], ['Order 8 pears']],
  ]);
});

test('only orders items below their minimum, sorted by name', async () => {
  const { restockOrders } = await load('restockOrders');
  const inventory = [
    { item: 'milk', quantity: 2, minimum: 5 },
    { item: 'bread', quantity: 10, minimum: 5 },
    { item: 'eggs', quantity: 5, minimum: 5 },
    { item: 'cheese', quantity: 1, minimum: 3 },
  ];
  assertCalls(restockOrders, [[[inventory], ['Order 5 cheese', 'Order 8 milk']]]);
});

test('returns an empty list when nothing is missing', async () => {
  const { restockOrders } = await load('restockOrders');
  assertCalls(restockOrders, [
    [[[{ item: 'rice', quantity: 9, minimum: 2 }]], []],
    [[[]], []],
  ]);
});
