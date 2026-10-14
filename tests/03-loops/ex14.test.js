import { test } from 'node:test';
import assert from 'node:assert/strict';
import { assertCalls, exercise } from '../helpers.js';

const { load, code } = exercise('03-loops/ex14');

test('counts the digits', async () => {
  const { countDigits } = await load('countDigits');
  assertCalls(countDigits, [
    [[12345], 5],
    [[7], 1],
    [[10], 2],
    [[999], 3],
    [[1000000], 7],
  ]);
});

test('0 has one digit', async () => {
  const { countDigits } = await load('countDigits');
  assertCalls(countDigits, [[[0], 1]]);
});

test('uses do...while, without strings', async () => {
  const source = await code();
  assert.match(source, /\bdo\s*\{[\s\S]*\}\s*while\s*\(/, 'Use a do...while loop.');
  assert.doesNotMatch(source, /\bString\b|`|\.length\b/, "Don't convert the number to a string.");
});
