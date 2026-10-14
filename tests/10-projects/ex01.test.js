import { test } from 'node:test';
import { assertCalls, exercise } from '../helpers.js';

const { load } = exercise('10-projects/ex01');

test('builds the list from 1 to n', async () => {
  const { fizzBuzzList } = await load('fizzBuzzList');
  assertCalls(fizzBuzzList, [
    [[1], ['1']],
    [[5], ['1', '2', 'Fizz', '4', 'Buzz']],
    [
      [15],
      ['1', '2', 'Fizz', '4', 'Buzz', 'Fizz', '7', '8', 'Fizz', 'Buzz', '11', 'Fizz', '13', '14', 'FizzBuzz'],
    ],
  ]);
});

test('returns an empty list for 0', async () => {
  const { fizzBuzzList } = await load('fizzBuzzList');
  assertCalls(fizzBuzzList, [[[0], []]]);
});
