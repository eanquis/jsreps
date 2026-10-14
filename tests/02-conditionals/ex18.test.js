import { test } from 'node:test';
import assert from 'node:assert/strict';
import { assertCalls, exercise } from '../helpers.js';

const { load } = exercise('02-conditionals/ex18');

test('returns the word that comes first', async () => {
  const { firstAlphabetically } = await load('firstAlphabetically');
  assertCalls(firstAlphabetically, [
    [['cat', 'dog'], 'cat'],
    [['zebra', 'ant'], 'ant'],
    [['car', 'cat'], 'car'],
    [['tea', 'te'], 'te'],
  ]);
});

test('works when both words are the same', async () => {
  const { firstAlphabetically } = await load('firstAlphabetically');
  assertCalls(firstAlphabetically, [[['same', 'same'], 'same']]);
});
