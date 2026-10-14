import { test } from 'node:test';
import assert from 'node:assert/strict';
import { exercise } from '../helpers.js';

const { load } = exercise('01-variables/ex03');

test('`isLearning` is true', async () => {
  const { isLearning } = await load('isLearning');
  assert.equal(typeof isLearning, 'boolean', 'Booleans are written without quotes.');
  assert.equal(isLearning, true);
});

test('`isTired` is false', async () => {
  const { isTired } = await load('isTired');
  assert.equal(typeof isTired, 'boolean', 'Booleans are written without quotes.');
  assert.equal(isTired, false);
});
