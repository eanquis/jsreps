import { test } from 'node:test';
import assert from 'node:assert/strict';
import { exercise } from '../helpers.js';

const { load, code } = exercise('01-variables/ex14');

test('`left` is "banana"', async () => {
  const { left } = await load('left');
  assert.equal(left, 'banana');
});

test('`right` is "apple"', async () => {
  const { right } = await load('right');
  assert.equal(right, 'apple');
});

test('values are moved, not typed again', async () => {
  const source = await code();
  for (const fruit of ['apple', 'banana']) {
    const count = (source.match(new RegExp(fruit, 'g')) ?? []).length;
    assert.equal(count, 1, `'${fruit}' should appear only once, in its original declaration.`);
  }
});
