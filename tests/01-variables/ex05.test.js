import { test } from 'node:test';
import assert from 'node:assert/strict';
import { exercise } from '../helpers.js';

const { load, code } = exercise('01-variables/ex05');

test('`counter` ends up as 3', async () => {
  const { counter } = await load('counter');
  assert.equal(counter, 3);
});

test('`counter` is declared with let, starting at 0', async () => {
  assert.match(await code(), /let\s+counter\s*=\s*0\b/);
});

test('`counter = counter + 1` is used three times', async () => {
  const uses = (await code()).match(/counter\s*=\s*counter\s*\+\s*1\b/g) ?? [];
  assert.equal(uses.length, 3, `Found ${uses.length} of 3.`);
});
