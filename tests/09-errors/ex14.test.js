import { test } from 'node:test';
import assert from 'node:assert/strict';
import { assertCalls, assertThrows, exercise } from '../helpers.js';

const { load, code } = exercise('09-errors/ex14');

test('`ValidationError` is a kind of Error', async () => {
  const { ValidationError } = await load('ValidationError');
  const error = new ValidationError('Something is wrong');
  assert.ok(error instanceof Error, 'ValidationError should extend Error.');
  assert.equal(error.name, 'ValidationError', 'Set this.name in the constructor.');
  assert.equal(error.message, 'Something is wrong', 'Pass the message to super().');
});

test('accepts emails with @', async () => {
  const { validateEmail } = await load('validateEmail');
  assertCalls(validateEmail, [
    [['ada@example.com'], true],
    [['a@b'], true],
  ]);
});

test('throws a ValidationError for emails without @', async () => {
  const { validateEmail, ValidationError } = await load('validateEmail', 'ValidationError');
  const expected = { name: 'ValidationError', message: 'Email must contain @' };
  assertThrows(validateEmail, ['ada.example.com'], expected);
  assertThrows(validateEmail, [''], expected);
  assert.throws(() => validateEmail('nope'), ValidationError);
});

test('extends Error with a class', async () => {
  assert.match(await code(), /class\s+ValidationError\s+extends\s+Error\b/);
});
