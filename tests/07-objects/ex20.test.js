import { test } from 'node:test';
import assert from 'node:assert/strict';
import { assertCalls, exercise } from '../helpers.js';

const { load } = exercise('07-objects/ex20');

const products = () => [
  { name: 'apple', category: 'fruit', price: 2, stock: 10 },
  { name: 'milk', category: 'dairy', price: 3, stock: 0 },
  { name: 'banana', category: 'fruit', price: 1, stock: 6 },
  { name: 'cheese', category: 'dairy', price: 8, stock: 2 },
  { name: 'bread', category: 'bakery', price: 4, stock: 0 },
];

test('builds the report', async () => {
  const { inventoryReport } = await load('inventoryReport');
  assertCalls(inventoryReport, [
    [
      [products()],
      {
        totalStock: 18,
        totalValue: 42,
        categories: { fruit: 2, dairy: 2, bakery: 1 },
        outOfStock: ['milk', 'bread'],
      },
    ],
    [
      [[{ name: 'pen', category: 'office', price: 2, stock: 5 }]],
      { totalStock: 5, totalValue: 10, categories: { office: 1 }, outOfStock: [] },
    ],
  ]);
});

test('an empty inventory has an empty report', async () => {
  const { inventoryReport } = await load('inventoryReport');
  assertCalls(inventoryReport, [
    [[[]], { totalStock: 0, totalValue: 0, categories: {}, outOfStock: [] }],
  ]);
});

test('the products are not changed', async () => {
  const { inventoryReport } = await load('inventoryReport');
  const list = products();
  inventoryReport(list);
  assert.deepEqual(list, products(), "Don't change the products you received.");
});
