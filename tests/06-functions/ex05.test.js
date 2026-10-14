import { test } from 'node:test';
import assert from 'node:assert/strict';
import { assertCalls, exercise } from '../helpers.js';

const { load, code } = exercise('06-functions/ex05');

test('greets the given name', async () => {
  const { greet } = await load('greet');
  assertCalls(greet, [
    [['Ada'], 'Hello, Ada!'],
    [['Grace'], 'Hello, Grace!'],
  ]);
});

test('greets "friend" when no name is given', async () => {
  const { greet } = await load('greet');
  assertCalls(greet, [
    [[], 'Hello, friend!'],
    [[undefined], 'Hello, friend!'],
  ]);
});

test('uses a default parameter', async () => {
  assert.match(
    await code(),
    /\(\s*\w+\s*=\s*['"`]friend['"`]\s*\)/,
    'Give the parameter a default value: (name = ...).',
  );
});
