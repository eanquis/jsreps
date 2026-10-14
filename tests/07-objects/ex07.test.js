import { test } from 'node:test';
import assert from 'node:assert/strict';
import { assertCalls, exercise } from '../helpers.js';

const { load, code } = exercise('07-objects/ex07');

test('lists the keys separated by commas', async () => {
  const { describeKeys } = await load('describeKeys');
  assertCalls(describeKeys, [
    [[{ a: 1, b: 2 }], 'a, b'],
    [[{ name: 'Ada', age: 36, city: 'London' }], 'name, age, city'],
    [[{ single: true }], 'single'],
  ]);
});

test('an empty object has no keys', async () => {
  const { describeKeys } = await load('describeKeys');
  assertCalls(describeKeys, [[[{}], '']]);
});

test('uses Object.keys', async () => {
  assert.match(await code(), /Object\.keys\(/);
});
