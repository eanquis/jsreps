import { test } from 'node:test';
import assert from 'node:assert/strict';
import { assertCalls, exercise } from '../helpers.js';

const { load } = exercise('07-objects/ex14');

test('counts each letter', async () => {
  const { countLetters } = await load('countLetters');
  assertCalls(countLetters, [
    [['hello'], { h: 1, e: 1, l: 2, o: 1 }],
    [['banana'], { b: 1, a: 3, n: 2 }],
    [['x'], { x: 1 }],
  ]);
});

test('an empty word has no letters', async () => {
  const { countLetters } = await load('countLetters');
  assertCalls(countLetters, [[[''], {}]]);
});
