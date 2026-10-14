import { test } from 'node:test';
import assert from 'node:assert/strict';
import { assertCalls, exercise } from '../helpers.js';

const { load } = exercise('03-loops/ex19');

test('recognizes primes', async () => {
  const { isPrime } = await load('isPrime');
  assertCalls(isPrime, [
    [[2], true],
    [[3], true],
    [[13], true],
    [[97], true],
    [[7919], true],
  ]);
});

test('recognizes numbers that are not prime', async () => {
  const { isPrime } = await load('isPrime');
  assertCalls(isPrime, [
    [[4], false],
    [[9], false],
    [[25], false],
    [[100], false],
    [[7917], false],
  ]);
});

test('numbers below 2 are not prime', async () => {
  const { isPrime } = await load('isPrime');
  assertCalls(isPrime, [
    [[1], false],
    [[0], false],
    [[-7], false],
  ]);
});
