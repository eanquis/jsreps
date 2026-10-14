import { test } from 'node:test';
import assert from 'node:assert/strict';
import { assertCalls, exercise } from '../helpers.js';

const { load } = exercise('09-errors/ex07');

function boom() {
  throw new Error('Boom');
}

function tooBig() {
  throw new RangeError('Too big');
}

function fine() {
  return 42;
}

test('returns the message of the error', async () => {
  const { errorMessage } = await load('errorMessage');
  assertCalls(errorMessage, [
    [[boom], 'Boom'],
    [[tooBig], 'Too big'],
  ]);
});

test('returns "No error" when nothing goes wrong', async () => {
  const { errorMessage } = await load('errorMessage');
  assertCalls(errorMessage, [[[fine], 'No error']]);
});
