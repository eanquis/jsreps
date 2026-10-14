import { test } from 'node:test';
import assert from 'node:assert/strict';
import { exercise } from '../helpers.js';

const { load } = exercise('01-variables/ex13');

test('`firstPlace` is "gold"', async () => {
  const { firstPlace } = await load('firstPlace');
  assert.equal(firstPlace, 'gold');
});

test('`userName` is "ada"', async () => {
  const { userName } = await load('userName');
  assert.equal(userName, 'ada');
});

test('`isNew` is true', async () => {
  const { isNew } = await load('isNew');
  assert.equal(isNew, true);
});
