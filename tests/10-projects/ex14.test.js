import { test } from 'node:test';
import { assertCalls, exercise } from '../helpers.js';

const { load } = exercise('10-projects/ex14');

test('groups words that are anagrams', async () => {
  const { groupAnagrams } = await load('groupAnagrams');
  assertCalls(groupAnagrams, [
    [[['eat', 'tea', 'tan', 'ate', 'nat', 'bat']], [['eat', 'tea', 'ate'], ['tan', 'nat'], ['bat']]],
    [[['listen', 'google', 'silent', 'enlist']], [['listen', 'silent', 'enlist'], ['google']]],
  ]);
});

test('words without anagrams get their own group', async () => {
  const { groupAnagrams } = await load('groupAnagrams');
  assertCalls(groupAnagrams, [
    [[['one', 'two']], [['one'], ['two']]],
    [[[]], []],
  ]);
});
