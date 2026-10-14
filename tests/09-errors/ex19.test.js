import { test } from 'node:test';
import assert from 'node:assert/strict';
import { assertCalls, exercise } from '../helpers.js';

const { load } = exercise('09-errors/ex19');

const valid = { username: 'ada', password: 'secret123', age: 36 };

test('a valid form has no problems', async () => {
  const { validateSignup } = await load('validateSignup');
  assertCalls(validateSignup, [
    [[valid], []],
    [[{ username: 'grace', password: '12345678', age: 13 }], []],
  ]);
});

test('checks the username', async () => {
  const { validateSignup } = await load('validateSignup');
  assertCalls(validateSignup, [
    [[{ ...valid, username: '' }], ['username is required']],
    [[{ ...valid, username: undefined }], ['username is required']],
    [[{ ...valid, username: 'al' }], ['username must be at least 3 characters']],
  ]);
});

test('checks the password', async () => {
  const { validateSignup } = await load('validateSignup');
  assertCalls(validateSignup, [
    [[{ ...valid, password: 'abc12' }], ['password must be at least 8 characters']],
    [[{ ...valid, password: 'password' }], ['password must contain a number']],
    [
      [{ ...valid, password: 'short' }],
      ['password must be at least 8 characters', 'password must contain a number'],
    ],
  ]);
});

test('checks the age', async () => {
  const { validateSignup } = await load('validateSignup');
  assertCalls(validateSignup, [
    [[{ ...valid, age: '36' }], ['age must be a number']],
    [[{ ...valid, age: undefined }], ['age must be a number']],
    [[{ ...valid, age: 12 }], ['age must be 13 or older']],
  ]);
});

test('reports every problem, in order', async () => {
  const { validateSignup } = await load('validateSignup');
  assertCalls(validateSignup, [
    [
      [{ username: '', password: 'pass', age: 10 }],
      [
        'username is required',
        'password must be at least 8 characters',
        'password must contain a number',
        'age must be 13 or older',
      ],
    ],
  ]);
});
