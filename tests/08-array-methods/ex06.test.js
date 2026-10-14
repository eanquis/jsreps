import { test } from 'node:test';
import assert from 'node:assert/strict';
import { assertCalls, exercise } from '../helpers.js';

const { load, code } = exercise('08-array-methods/ex06');

const users = [
  { name: 'Ada', age: 36 },
  { name: 'Grace', age: 85 },
  { name: 'Alan', age: 41 },
];

test('returns the user with that name', async () => {
  const { findUser } = await load('findUser');
  assertCalls(findUser, [
    [[users, 'Grace'], { name: 'Grace', age: 85 }],
    [[users, 'Ada'], { name: 'Ada', age: 36 }],
  ]);
});

test('returns undefined when there is no such user', async () => {
  const { findUser } = await load('findUser');
  assertCalls(findUser, [
    [[users, 'Linus'], undefined],
    [[[], 'Ada'], undefined],
  ]);
});

test('uses find', async () => {
  assert.match(await code(), /\.find\s*\(/, 'Use .find().');
});
