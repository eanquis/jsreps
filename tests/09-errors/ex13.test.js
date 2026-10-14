import { test } from 'node:test';
import assert from 'node:assert/strict';
import { assertCalls, exercise } from '../helpers.js';

const { load } = exercise('09-errors/ex13');

test('accepts long passwords', async () => {
  const { checkPassword } = await load('checkPassword');
  assertCalls(checkPassword, [
    [['12345678'], true],
    [['correct horse battery staple'], true],
  ]);
});

test('throws a real Error for short passwords', async () => {
  const { checkPassword } = await load('checkPassword');
  assert.throws(
    () => checkPassword('short'),
    (error) => {
      assert.ok(error instanceof Error, 'Throw an Error object, not a string.');
      assert.equal(error.message, 'Password too short');
      return true;
    },
    "checkPassword('short') should throw.",
  );
});
