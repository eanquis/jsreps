import { test } from 'node:test';
import assert from 'node:assert/strict';
import { assertCalls, exercise } from '../helpers.js';

const { load } = exercise('07-objects/ex10');

test('builds the shipping label', async () => {
  const { shippingLabel } = await load('shippingLabel');
  assertCalls(shippingLabel, [
    [
      [
        {
          customer: { name: 'Ada Lovelace' },
          address: { street: '12 Main St', city: 'London', country: 'UK' },
        },
      ],
      'Ada Lovelace, 12 Main St, London, UK',
    ],
    [
      [
        {
          customer: { name: 'Alan Turing' },
          address: { street: '5 Park Rd', city: 'Manchester', country: 'UK' },
        },
      ],
      'Alan Turing, 5 Park Rd, Manchester, UK',
    ],
  ]);
});
