import { test } from 'node:test';
import { assertCalls, exercise } from '../helpers.js';

const { load } = exercise('10-projects/ex05');

test('counts each word', async () => {
  const { wordFrequency } = await load('wordFrequency');
  assertCalls(wordFrequency, [
    [['one two two'], { one: 1, two: 2 }],
    [['The cat and the hat.'], { the: 2, cat: 1, and: 1, hat: 1 }],
  ]);
});

test('ignores punctuation, case and extra spaces', async () => {
  const { wordFrequency } = await load('wordFrequency');
  assertCalls(wordFrequency, [
    [['Hi!  hi?   HI, hi.'], { hi: 4 }],
  ]);
});

test('an empty text has no words', async () => {
  const { wordFrequency } = await load('wordFrequency');
  assertCalls(wordFrequency, [[[''], {}]]);
});
