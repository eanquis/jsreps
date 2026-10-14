import { test } from 'node:test';
import assert from 'node:assert/strict';
import { exercise } from '../helpers.js';

const { load } = exercise('06-functions/ex16');

test('`makeMultiplier(factor)` returns a function', async () => {
  const { makeMultiplier } = await load('makeMultiplier');
  assert.equal(typeof makeMultiplier(2), 'function', 'makeMultiplier(2) should return a function.');
});

test('the returned function multiplies by the factor', async () => {
  const { makeMultiplier } = await load('makeMultiplier');
  const double = makeMultiplier(2);
  const triple = makeMultiplier(3);
  assert.equal(double(5), 10, 'makeMultiplier(2)(5) should return 10.');
  assert.equal(triple(5), 15, 'makeMultiplier(3)(5) should return 15.');
  assert.equal(double(-4), -8, 'makeMultiplier(2)(-4) should return -8.');
  assert.equal(makeMultiplier(0)(7), 0, 'makeMultiplier(0)(7) should return 0.');
});
