import { test } from 'node:test';
import assert from 'node:assert/strict';
import { assertCalls, exercise } from '../helpers.js';

const { load, code } = exercise('02-conditionals/ex14');

test('negative numbers become positive', async () => {
  const { absolute } = await load('absolute');
  assertCalls(absolute, [
    [[-5], 5],
    [[-0.5], 0.5],
    [[-100], 100],
  ]);
});

test('zero and positive numbers stay the same', async () => {
  const { absolute } = await load('absolute');
  assertCalls(absolute, [
    [[0], 0],
    [[5], 5],
    [[3.14], 3.14],
  ]);
});

test('uses the ternary operator, without if or Math', async () => {
  const source = await code();
  assert.doesNotMatch(source, /\bif\b/, "Don't use if in this exercise.");
  assert.doesNotMatch(source, /\bMath\b/, "Don't use Math in this exercise.");
  assert.match(source, /\?[\s\S]*:/, 'Use condition ? a : b.');
});
