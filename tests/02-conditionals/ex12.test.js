import { test } from 'node:test';
import assert from 'node:assert/strict';
import { assertCalls, exercise } from '../helpers.js';

const { load } = exercise('02-conditionals/ex12');

test('greets people by name', async () => {
  const { greet } = await load('greet');
  assertCalls(greet, [
    [['Ada'], 'Hello, Ada!'],
    [['Grace'], 'Hello, Grace!'],
  ]);
});

test('greets strangers when there is no name', async () => {
  const { greet } = await load('greet');
  assertCalls(greet, [
    [[''], 'Hello, stranger!'],
    [[undefined], 'Hello, stranger!'],
    [[null], 'Hello, stranger!'],
  ]);
});
