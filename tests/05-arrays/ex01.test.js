import { test } from 'node:test';
import assert from 'node:assert/strict';
import { exercise } from '../helpers.js';

const { load } = exercise('05-arrays/ex01');

test('`fruits` has apple, banana and cherry, in order', async () => {
  const { fruits } = await load('fruits');
  assert.ok(Array.isArray(fruits), '`fruits` should be an array: values between [ and ].');
  assert.deepEqual(fruits, ['apple', 'banana', 'cherry']);
});

test('`nothingYet` is an empty array', async () => {
  const { nothingYet } = await load('nothingYet');
  assert.ok(Array.isArray(nothingYet), '`nothingYet` should be an array.');
  assert.deepEqual(nothingYet, []);
});
