import { test } from 'node:test';
import assert from 'node:assert/strict';
import { exercise } from '../helpers.js';

const { load, code } = exercise('01-variables/ex12');

test('`nickname` is declared with let and no value', async () => {
  const { nickname } = await load('nickname');
  assert.equal(nickname, undefined);
  assert.match(await code(), /let\s+nickname\s*;/, 'Declare it without `=`.');
});

test('`middleName` is intentionally empty', async () => {
  const { middleName } = await load('middleName');
  assert.equal(middleName, null);
  assert.match(await code(), /const\s+middleName\b/, 'Declare it with const.');
});
