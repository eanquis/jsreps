import { test } from 'node:test';
import assert from 'node:assert/strict';
import { assertCalls, exercise } from '../helpers.js';

const { load } = exercise('02-conditionals/ex20');

test('divisible by 3 and 5: FizzBuzz', async () => {
  const { fizzBuzz } = await load('fizzBuzz');
  assertCalls(fizzBuzz, [
    [[15], 'FizzBuzz'],
    [[45], 'FizzBuzz'],
  ]);
});

test('divisible by 3: Fizz', async () => {
  const { fizzBuzz } = await load('fizzBuzz');
  assertCalls(fizzBuzz, [
    [[3], 'Fizz'],
    [[9], 'Fizz'],
  ]);
});

test('divisible by 5: Buzz', async () => {
  const { fizzBuzz } = await load('fizzBuzz');
  assertCalls(fizzBuzz, [
    [[5], 'Buzz'],
    [[20], 'Buzz'],
  ]);
});

test('any other number, as a string', async () => {
  const { fizzBuzz } = await load('fizzBuzz');
  assertCalls(fizzBuzz, [
    [[1], '1'],
    [[7], '7'],
    [[98], '98'],
  ]);
});
