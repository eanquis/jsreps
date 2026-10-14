import { test } from 'node:test';
import assert from 'node:assert/strict';
import { assertCalls, exercise } from '../helpers.js';

const { load, code } = exercise('09-errors/ex11');

test('returns the value when the division works', async () => {
  const { safeDivide } = await load('safeDivide');
  assertCalls(safeDivide, [
    [[10, 2], { ok: true, value: 5 }],
    [[1, 4], { ok: true, value: 0.25 }],
    [[0, 3], { ok: true, value: 0 }],
  ]);
});

test('returns the error message when the division fails', async () => {
  const { safeDivide } = await load('safeDivide');
  assertCalls(safeDivide, [
    [[10, 0], { ok: false, error: 'Cannot divide by zero' }],
    [['10', 2], { ok: false, error: 'Both arguments must be numbers' }],
  ]);
});

test('uses try/catch around divide', async () => {
  const source = await code();
  assert.match(source, /\btry\s*\{/, 'Use try/catch.');
  assert.match(source, /\bdivide\s*\(\s*a\s*,\s*b\s*\)/, 'Call divide(a, b).');
});
