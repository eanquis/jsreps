import { test } from 'node:test';
import assert from 'node:assert/strict';
import { assertCalls, exercise } from '../helpers.js';

const { load, code } = exercise('09-errors/ex09');

test('runs the action while locked and returns its result', async () => {
  const { withLock } = await load('withLock');
  const lock = { locked: false };
  let lockedDuringAction;
  const result = withLock(lock, () => {
    lockedDuringAction = lock.locked;
    return 'done';
  });
  assert.equal(lockedDuringAction, true, 'The lock should be locked while the action runs.');
  assert.equal(result, 'done', 'Return the result of the action.');
  assert.equal(lock.locked, false, 'Unlock at the end.');
});

test('unlocks even when the action throws, and lets the error through', async () => {
  const { withLock } = await load('withLock');
  const lock = { locked: false };
  assert.throws(
    () =>
      withLock(lock, () => {
        throw new Error('Action failed');
      }),
    { message: 'Action failed' },
    "Don't catch the error: it must reach whoever called withLock.",
  );
  assert.equal(lock.locked, false, 'The lock is still locked after the error. Use finally.');
});

test('uses finally', async () => {
  assert.match(await code(), /\bfinally\s*\{/);
});
