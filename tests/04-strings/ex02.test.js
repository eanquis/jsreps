import { test } from 'node:test';
import assert from 'node:assert/strict';
import { assertCalls, exercise } from '../helpers.js';

const { load } = exercise('04-strings/ex02');

test('joins the first and the last character', async () => {
  const { firstAndLast } = await load('firstAndLast');
  assertCalls(firstAndLast, [
    [['cat'], 'ct'],
    [['JavaScript'], 'Jt'],
    [['hi'], 'hi'],
  ]);
});

test('a single character is both the first and the last', async () => {
  const { firstAndLast } = await load('firstAndLast');
  assertCalls(firstAndLast, [[['a'], 'aa']]);
});
