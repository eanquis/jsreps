import { test } from 'node:test';
import assert from 'node:assert/strict';
import { assertCalls, exercise } from '../helpers.js';

const { load } = exercise('06-functions/ex13');

test('`shout()` returns "Hello!"', async () => {
  const { shout } = await load('shout');
  assertCalls(shout, [[[], 'Hello!']]);
});
