import { test } from 'node:test';
import assert from 'node:assert/strict';
import { assertCalls, exercise } from '../helpers.js';

const { load } = exercise('07-objects/ex19');

test('finds the most common word', async () => {
  const { mostCommonWord } = await load('mostCommonWord');
  assertCalls(mostCommonWord, [
    [['the cat and the hat'], 'the'],
    [['one two two three three three'], 'three'],
    [['hello'], 'hello'],
  ]);
});

test('ignores case and answers in lowercase', async () => {
  const { mostCommonWord } = await load('mostCommonWord');
  assertCalls(mostCommonWord, [
    [['Go go GO stop'], 'go'],
    [['Stop stop go'], 'stop'],
  ]);
});

test('in a tie, the word that appeared first wins', async () => {
  const { mostCommonWord } = await load('mostCommonWord');
  assertCalls(mostCommonWord, [
    [['red blue blue red'], 'red'],
    [['a b c'], 'a'],
    [['dog cat cat dog bird'], 'dog'],
  ]);
});
