import { test } from 'node:test';
import assert from 'node:assert/strict';
import { assertCalls, exercise } from '../helpers.js';

const { load } = exercise('06-functions/ex01');

test('`sayHello()` returns "Hello!"', async () => {
  const { sayHello } = await load('sayHello');
  assertCalls(sayHello, [[[], 'Hello!']]);
});
