import { test } from 'node:test';
import assert from 'node:assert/strict';
import { assertCalls, exercise } from '../helpers.js';

const { load, code } = exercise('06-functions/ex06');

test('`triple(n)` returns n times 3', async () => {
  const { triple } = await load('triple');
  assertCalls(triple, [
    [[2], 6],
    [[0], 0],
    [[-4], -12],
  ]);
});

test('`triple` is a function expression', async () => {
  assert.match(
    await code(),
    /const\s+triple\s*=\s*function\b/,
    'Store a function expression in a constant: const triple = function (...) { ... }',
  );
});
