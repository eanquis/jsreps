import { test } from 'node:test';
import assert from 'node:assert/strict';
import { assertCalls, exercise } from '../helpers.js';

const { load, code } = exercise('08-array-methods/ex09');

test('hasIngredient checks if the ingredient is in the list', async () => {
  const { hasIngredient } = await load('hasIngredient');
  assertCalls(hasIngredient, [
    [[['flour', 'eggs', 'milk'], 'eggs'], true],
    [[['flour', 'eggs', 'milk'], 'sugar'], false],
    [[['flour'], 'Flour'], false],
    [[[], 'eggs'], false],
  ]);
});

test('hasCheapItem checks if any item costs maxPrice or less', async () => {
  const { hasCheapItem } = await load('hasCheapItem');
  const items = [
    { name: 'book', price: 20 },
    { name: 'pen', price: 2 },
  ];
  assertCalls(hasCheapItem, [
    [[items, 5], true],
    [[items, 2], true],
    [[items, 1], false],
    [[[], 100], false],
  ]);
});

test('uses includes and some', async () => {
  const source = await code();
  assert.match(source, /\.includes\s*\(/, 'Use .includes() in hasIngredient.');
  assert.match(source, /\.some\s*\(/, 'Use .some() in hasCheapItem.');
});
