import { test } from 'node:test';
import assert from 'node:assert/strict';
import { assertCalls, exercise } from '../helpers.js';

const { load, code } = exercise('05-arrays/ex05');

const guests = ['Ada', 'Grace', 'Linus'];

test('guests on the list are welcomed with their position', async () => {
  const { inviteStatus } = await load('inviteStatus');
  assertCalls(inviteStatus, [
    [[guests, 'Ada'], 'Welcome, Ada! You are guest number 1.'],
    [[guests, 'Grace'], 'Welcome, Grace! You are guest number 2.'],
    [[guests, 'Linus'], 'Welcome, Linus! You are guest number 3.'],
  ]);
});

test('anyone else is turned away', async () => {
  const { inviteStatus } = await load('inviteStatus');
  assertCalls(inviteStatus, [
    [[guests, 'Bob'], 'Sorry, Bob, you are not on the list.'],
    [[guests, 'ada'], 'Sorry, ada, you are not on the list.'],
    [[[], 'Ada'], 'Sorry, Ada, you are not on the list.'],
  ]);
});

test('uses includes or indexOf', async () => {
  assert.match(await code(), /\.(includes|indexOf)\(/, 'Use includes() or indexOf().');
});
