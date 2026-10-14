import { test } from 'node:test';
import assert from 'node:assert/strict';
import { assertCalls, exercise } from '../helpers.js';

const { load, code } = exercise('07-objects/ex11');

test('returns the city when there is one', async () => {
  const { getCity } = await load('getCity');
  assertCalls(getCity, [
    [[{ name: 'Ada', address: { city: 'London' } }], 'London'],
    [[{ name: 'Grace', address: { street: '1 Navy Rd', city: 'Arlington' } }], 'Arlington'],
  ]);
});

test('returns "Unknown" when the address is missing', async () => {
  const { getCity } = await load('getCity');
  assertCalls(getCity, [
    [[{ name: 'Ada' }], 'Unknown'],
    [[{ name: 'Ada', address: null }], 'Unknown'],
  ]);
});

test('returns "Unknown" when the city is missing', async () => {
  const { getCity } = await load('getCity');
  assertCalls(getCity, [
    [[{ name: 'Ada', address: {} }], 'Unknown'],
    [[{ name: 'Ada', address: { city: null } }], 'Unknown'],
  ]);
});

test('uses ?. and ??', async () => {
  const source = await code();
  assert.match(source, /\?\./, 'Use optional chaining (?.).');
  assert.match(source, /\?\?/, 'Use the nullish operator (??).');
});
