import { test } from 'node:test';
import assert from 'node:assert/strict';
import { assertCalls, exercise } from '../helpers.js';

const { load, code } = exercise('02-conditionals/ex13');

test('one item is singular', async () => {
  const { itemLabel } = await load('itemLabel');
  assertCalls(itemLabel, [[[1], '1 item']]);
});

test('any other count is plural', async () => {
  const { itemLabel } = await load('itemLabel');
  assertCalls(itemLabel, [
    [[0], '0 items'],
    [[2], '2 items'],
    [[42], '42 items'],
  ]);
});

test('uses the ternary operator instead of if', async () => {
  const source = await code();
  assert.doesNotMatch(source, /\bif\b/, "Don't use if in this exercise.");
  assert.match(source, /\?[\s\S]*:/, 'Use condition ? a : b.');
});
