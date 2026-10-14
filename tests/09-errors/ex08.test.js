import { test } from 'node:test';
import assert from 'node:assert/strict';
import { assertCalls, exercise } from '../helpers.js';

const { load } = exercise('09-errors/ex08');

function tooBig() {
  throw new RangeError('Too big');
}

function generic() {
  throw new Error('Something failed');
}

function wrongType() {
  throw new TypeError('Expected a number');
}

function fine() {
  return 'yay';
}

test('describes errors with their name and message', async () => {
  const { describeError } = await load('describeError');
  assertCalls(describeError, [
    [[tooBig], 'RangeError: Too big'],
    [[generic], 'Error: Something failed'],
    [[wrongType], 'TypeError: Expected a number'],
  ]);
});

test('returns "OK" when nothing goes wrong', async () => {
  const { describeError } = await load('describeError');
  assertCalls(describeError, [[[fine], 'OK']]);
});
