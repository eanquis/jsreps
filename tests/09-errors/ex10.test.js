import { test } from 'node:test';
import assert from 'node:assert/strict';
import { assertCalls, assertThrows, exercise } from '../helpers.js';

const { load } = exercise('09-errors/ex10');

test('converts valid text into a number', async () => {
  const { parseAge } = await load('parseAge');
  assertCalls(parseAge, [
    [['42'], 42],
    [['0'], 0],
    [[' 7 '], 7],
    [['18.5'], 18.5],
  ]);
});

test('rejects text that is not a number', async () => {
  const { parseAge } = await load('parseAge');
  const expected = { name: 'TypeError', message: 'Age must be a number' };
  assertThrows(parseAge, ['abc'], expected);
  assertThrows(parseAge, ['12 years'], expected);
});

test('rejects empty text, which Number() would turn into 0', async () => {
  const { parseAge } = await load('parseAge');
  const expected = { name: 'TypeError', message: 'Age must be a number' };
  assertThrows(parseAge, [''], expected);
  assertThrows(parseAge, ['   '], expected);
});

test('rejects negative ages', async () => {
  const { parseAge } = await load('parseAge');
  const expected = { name: 'RangeError', message: 'Age cannot be negative' };
  assertThrows(parseAge, ['-1'], expected);
  assertThrows(parseAge, ['-30'], expected);
});
