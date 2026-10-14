import { test } from 'node:test';
import assert from 'node:assert/strict';
import { assertCalls, exercise } from '../helpers.js';

const { load, code } = exercise('06-functions/ex12');

test('subtracts the discount from the price', async () => {
  const { applyDiscount } = await load('applyDiscount');
  assertCalls(applyDiscount, [
    [[50, 10], 40],
    [[100, 25], 75],
    [[10, 0], 10],
  ]);
});

test('the same input always gives the same output', async () => {
  const { applyDiscount } = await load('applyDiscount');
  const first = applyDiscount(50, 10);
  const second = applyDiscount(50, 10);
  assert.equal(second, first, 'Calling applyDiscount(50, 10) twice gave different results.');
});

test('no variables are declared outside the function', async () => {
  assert.doesNotMatch(
    await code(),
    /^(let|const|var)\s/m,
    'Remove the variables declared outside the function: use the parameters instead.',
  );
});
