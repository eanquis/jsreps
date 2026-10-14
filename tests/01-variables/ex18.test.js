import { test } from 'node:test';
import assert from 'node:assert/strict';
import { exercise } from '../helpers.js';

const { load, code } = exercise('01-variables/ex18');

test('`age` is a number converted from `input`', async () => {
  const { age } = await load('age');
  assert.equal(typeof age, 'number', '`age` should be a number, not a string.');
  assert.equal(age, 42);
  assert.match(await code(), /Number\(\s*input\s*\)/, 'Use Number(input).');
});

test('`ageNextYear` is one more than `age`', async () => {
  const { ageNextYear } = await load('ageNextYear');
  assert.equal(ageNextYear, 43);
  assert.match(await code(), /ageNextYear\s*=\s*age\b/, 'Calculate it from `age`.');
});
