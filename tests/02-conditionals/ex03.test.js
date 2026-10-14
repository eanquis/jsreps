import { test } from 'node:test';
import assert from 'node:assert/strict';
import { assertCalls, exercise } from '../helpers.js';

const { load, code } = exercise('02-conditionals/ex03');

test('the right password grants access', async () => {
  const { checkPassword } = await load('checkPassword');
  assertCalls(checkPassword, [[['open sesame'], 'Access granted']]);
});

test('any other password is denied', async () => {
  const { checkPassword } = await load('checkPassword');
  assertCalls(checkPassword, [
    [['Open Sesame'], 'Access denied'],
    [['open sesame '], 'Access denied'],
    [[''], 'Access denied'],
    [['123456'], 'Access denied'],
  ]);
});

test('uses if and else', async () => {
  const source = await code();
  assert.match(source, /\bif\s*\(/, 'Use an if.');
  assert.match(source, /\belse\b/, 'Use an else.');
});
