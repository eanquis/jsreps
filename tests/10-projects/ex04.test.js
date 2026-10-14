import { test } from 'node:test';
import { assertCalls, exercise } from '../helpers.js';

const { load } = exercise('10-projects/ex04');

test('recognizes anagrams', async () => {
  const { areAnagrams } = await load('areAnagrams');
  assertCalls(areAnagrams, [
    [['listen', 'silent'], true],
    [['Dormitory', 'dirty room'], true],
    [['The eyes', 'They see'], true],
  ]);
});

test('rejects words with different letters or counts', async () => {
  const { areAnagrams } = await load('areAnagrams');
  assertCalls(areAnagrams, [
    [['hello', 'world'], false],
    [['aab', 'abb'], false],
    [['abc', 'abcd'], false],
  ]);
});
