import { test } from 'node:test';
import assert from 'node:assert/strict';
import { exercise } from '../helpers.js';

const { load, code } = exercise('01-variables/ex15');

test('`answer` is written as a string', async () => {
  assert.match(await code(), /answer\s*=\s*['"`]/, 'Write the value between quotes.');
});

test('`answer` is the value of `message` after the block', async () => {
  const { answer } = await load('answer');
  assert.equal(answer, 'outside');
});
