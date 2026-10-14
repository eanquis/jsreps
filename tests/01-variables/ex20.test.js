import { test } from 'node:test';
import assert from 'node:assert/strict';
import { exercise } from '../helpers.js';

const { load, code } = exercise('01-variables/ex20');

test('`subtotal` is the cost of all items', async () => {
  const { subtotal } = await load('subtotal');
  assert.equal(subtotal, 20);
});

test('`tax` is the subtotal times the tax rate', async () => {
  const { tax } = await load('tax');
  assert.equal(tax, 2);
});

test('`total` is the subtotal plus the tax', async () => {
  const { total } = await load('total');
  assert.equal(total, 22);
});

test('`receipt` follows the format', async () => {
  const { receipt } = await load('receipt');
  assert.equal(receipt, 'Subtotal: $20 | Tax: $2 | Total: $22');
});

test('everything is calculated from the variables', async () => {
  const source = await code();
  assert.doesNotMatch(source, /\b(20|22)\b/, "Don't type the results, calculate them.");
  assert.match(source, /tax\s*=[^;\n]*taxRate/, 'Calculate `tax` using `taxRate`.');
});
