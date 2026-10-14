import { test } from 'node:test';
import assert from 'node:assert/strict';
import { exercise } from '../helpers.js';

const { load, code } = exercise('01-variables/ex08');

test('`total` is the price of all items', async () => {
  const { total } = await load('total');
  assert.equal(total, 60);
});

test('`total` is calculated from `price` and `quantity`', async () => {
  const declaration = (await code()).match(/total\s*=([^;\n]*)/)?.[1] ?? '';
  assert.match(declaration, /\bprice\b/, 'Use the `price` variable.');
  assert.match(declaration, /\bquantity\b/, 'Use the `quantity` variable.');
});
