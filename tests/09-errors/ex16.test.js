import { test } from 'node:test';
import assert from 'node:assert/strict';
import { assertCalls, assertThrows, exercise } from '../helpers.js';

const { load } = exercise('09-errors/ex16');

test('creates users', async () => {
  const { createUser } = await load('createUser');
  assertCalls(createUser, [
    [['Ada', 36], { name: 'Ada', age: 36 }],
    [['  Grace  ', 0], { name: 'Grace', age: 0 }],
    [['Old Timer', 150], { name: 'Old Timer', age: 150 }],
  ]);
});

test('name must be a non-empty string', async () => {
  const { createUser } = await load('createUser');
  const expected = { name: 'TypeError', message: 'name must be a non-empty string' };
  assertThrows(createUser, [42, 20], expected);
  assertThrows(createUser, ['', 20], expected);
  assertThrows(createUser, ['   ', 20], expected);
  assertThrows(createUser, [undefined, 'oops'], expected);
});

test('age must be an integer', async () => {
  const { createUser } = await load('createUser');
  const expected = { name: 'TypeError', message: 'age must be an integer' };
  assertThrows(createUser, ['Ada', '36'], expected);
  assertThrows(createUser, ['Ada', 36.5], expected);
  assertThrows(createUser, ['Ada', undefined], expected);
});

test('age must be between 0 and 150', async () => {
  const { createUser } = await load('createUser');
  const expected = { name: 'RangeError', message: 'age must be between 0 and 150' };
  assertThrows(createUser, ['Ada', -1], expected);
  assertThrows(createUser, ['Ada', 151], expected);
});
