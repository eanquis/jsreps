import { test } from 'node:test';
import assert from 'node:assert/strict';
import { exercise } from '../helpers.js';

const { load } = exercise('01-variables/ex01');

test('`greeting` is a string', async () => {
  const { greeting } = await load('greeting');
  assert.equal(typeof greeting, 'string', 'Strings go between quotes, like "this".');
});

test('`greeting` is "Hello, world!"', async () => {
  const { greeting } = await load('greeting');
  assert.equal(greeting, 'Hello, world!');
});
