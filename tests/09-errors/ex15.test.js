import { test } from 'node:test';
import assert from 'node:assert/strict';
import { assertCalls, exercise } from '../helpers.js';

const { load, code } = exercise('09-errors/ex15');

test('returns "ok" when nothing goes wrong', async () => {
  const { handle } = await load('handle');
  assertCalls(handle, [[[() => 'whatever'], 'ok']]);
});

test('handles a ValidationError', async () => {
  const { handle, ValidationError } = await load('handle', 'ValidationError');
  const invalidAge = () => {
    throw new ValidationError('age is required');
  };
  assertCalls(handle, [[[invalidAge], 'Invalid: age is required']]);
});

test('throws any other error again', async () => {
  const { handle } = await load('handle');
  const bug = () => {
    throw new TypeError('x is not a function');
  };
  assert.throws(() => handle(bug), { name: 'TypeError', message: 'x is not a function' },
    'handle() should let errors that are not ValidationError through.');
});

test('uses instanceof', async () => {
  assert.match(await code(), /\binstanceof\s+ValidationError\b/);
});
