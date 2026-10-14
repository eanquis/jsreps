import { test } from 'node:test';
import assert from 'node:assert/strict';
import { exercise } from '../helpers.js';

const { load, code } = exercise('01-variables/ex09');

test('`fullName` is "Ada Lovelace"', async () => {
  const { fullName } = await load('fullName');
  assert.equal(fullName, 'Ada Lovelace');
});

test('`fullName` is built with a template literal', async () => {
  const source = await code();
  assert.match(source, /\$\{\s*firstName\s*\}/, 'Use ${firstName} inside backticks.');
  assert.match(source, /\$\{\s*lastName\s*\}/, 'Use ${lastName} inside backticks.');
});
