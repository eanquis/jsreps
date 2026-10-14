import { test } from 'node:test';
import assert from 'node:assert/strict';
import { assertCalls, exercise } from '../helpers.js';

const { load, code } = exercise('09-errors/ex06');

test('parses valid JSON', async () => {
  const { parseJSON } = await load('parseJSON');
  assertCalls(parseJSON, [
    [['{"name":"Ada","age":36}'], { name: 'Ada', age: 36 }],
    [['[1,2,3]'], [1, 2, 3]],
    [['42'], 42],
    [['"hello"'], 'hello'],
  ]);
});

test('returns null for invalid JSON', async () => {
  const { parseJSON } = await load('parseJSON');
  assertCalls(parseJSON, [
    [['oops'], null],
    [[''], null],
    [["{'single':'quotes'}"], null],
    [['{"unfinished":'], null],
  ]);
});

test('uses try/catch', async () => {
  const source = await code();
  assert.match(source, /\btry\s*\{/, 'Use try.');
  assert.match(source, /\bcatch\b/, 'Use catch.');
});
