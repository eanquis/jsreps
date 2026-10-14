import { test } from 'node:test';
import assert from 'node:assert/strict';
import { assertCalls, exercise } from '../helpers.js';

const { load, code } = exercise('06-functions/ex07');

test('even numbers', async () => {
  const { isEven } = await load('isEven');
  assertCalls(isEven, [
    [[0], true],
    [[4], true],
    [[-2], true],
  ]);
});

test('odd numbers', async () => {
  const { isEven } = await load('isEven');
  assertCalls(isEven, [
    [[1], false],
    [[7], false],
    [[-3], false],
  ]);
});

test('`isEven` is an arrow function with an implicit return', async () => {
  const source = await code();
  assert.match(source, /const\s+isEven\s*=[^;]*=>/, 'Use an arrow function: const isEven = (n) => ...');
  assert.match(source, /=>\s*[^\s{]/, 'Write the value right after =>, without curly braces.');
  assert.doesNotMatch(source, /\breturn\b/, "Arrow functions without braces don't need return.");
});
