import { test } from 'node:test';
import assert from 'node:assert/strict';
import { assertCalls, exercise } from '../helpers.js';

const { load, code } = exercise('07-objects/ex03');

const product = { name: 'pen', price: 2, color: 'blue' };

test('reads the property named by `field`', async () => {
  const { describeField } = await load('describeField');
  assertCalls(describeField, [
    [[product, 'price'], 'price: 2'],
    [[product, 'name'], 'name: pen'],
    [[product, 'color'], 'color: blue'],
  ]);
});

test('missing properties show as undefined', async () => {
  const { describeField } = await load('describeField');
  assertCalls(describeField, [[[product, 'size'], 'size: undefined']]);
});

test('uses brackets', async () => {
  assert.match(await code(), /\[\s*field\s*\]/, 'Use product[field].');
});
