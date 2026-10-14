import { test } from 'node:test';
import assert from 'node:assert/strict';
import { assertCalls, exercise } from '../helpers.js';

const { load, code } = exercise('07-objects/ex04');

test('returns the updated account', async () => {
  const { buildAccount } = await load('buildAccount');
  assertCalls(buildAccount, [
    [['Ada'], { name: 'Ada', balance: 100, isActive: true }],
    [['Grace'], { name: 'Grace', balance: 100, isActive: true }],
  ]);
});

test('the password is removed with delete', async () => {
  const { buildAccount } = await load('buildAccount');
  assert.equal('password' in buildAccount('Ada'), false, 'The password should not exist anymore.');
  assert.match(await code(), /\bdelete\s+account\b/, 'Use delete.');
});
