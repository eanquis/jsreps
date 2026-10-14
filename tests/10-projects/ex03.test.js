import { test } from 'node:test';
import { assertCalls, exercise } from '../helpers.js';

const { load } = exercise('10-projects/ex03');

test('recognizes palindromes, ignoring case, spaces and punctuation', async () => {
  const { isPalindromeSentence } = await load('isPalindromeSentence');
  assertCalls(isPalindromeSentence, [
    [['racecar'], true],
    [['Never odd or even'], true],
    [['A man, a plan, a canal: Panama!'], true],
    [['Was it a car or a cat I saw?'], true],
    [['12321'], true],
  ]);
});

test('rejects sentences that are not palindromes', async () => {
  const { isPalindromeSentence } = await load('isPalindromeSentence');
  assertCalls(isPalindromeSentence, [
    [['hello'], false],
    [['Almost a palindrome'], false],
    [['123'], false],
  ]);
});
