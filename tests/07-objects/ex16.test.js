import { test } from 'node:test';
import assert from 'node:assert/strict';
import { assertCalls, exercise } from '../helpers.js';

const { load, code } = exercise('07-objects/ex16');

test('formats the user', async () => {
  const { formatUser } = await load('formatUser');
  assertCalls(formatUser, [
    [[{ name: 'Ada', age: 36, city: 'London' }], 'Ada, 36, London'],
    [[{ city: 'Arlington', age: 85, name: 'Grace' }], 'Grace, 85, Arlington'],
  ]);
});

test('a missing city is "Unknown"', async () => {
  const { formatUser } = await load('formatUser');
  assertCalls(formatUser, [[[{ name: 'Alan', age: 41 }], 'Alan, 41, Unknown']]);
});

test('uses destructuring', async () => {
  const pattern = /(const|let)\s*\{[^}]*\}\s*=|\(\s*\{[^}]*\}\s*\)/;
  assert.match(await code(), pattern, 'Read the properties with const { name, age } = user.');
});
