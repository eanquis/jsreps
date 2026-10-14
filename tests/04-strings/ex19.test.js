import { test } from 'node:test';
import assert from 'node:assert/strict';
import { assertCalls, exercise } from '../helpers.js';

const { load } = exercise('04-strings/ex19');

test('words that read the same backwards are palindromes', async () => {
  const { isPalindrome } = await load('isPalindrome');
  assertCalls(isPalindrome, [
    [['racecar'], true],
    [['level'], true],
    [['a'], true],
  ]);
});

test('ignores case and spaces', async () => {
  const { isPalindrome } = await load('isPalindrome');
  assertCalls(isPalindrome, [
    [['Racecar'], true],
    [['Never odd or even'], true],
    [['A man a plan a canal Panama'], true],
  ]);
});

test('other texts are not palindromes', async () => {
  const { isPalindrome } = await load('isPalindrome');
  assertCalls(isPalindrome, [
    [['hello'], false],
    [['ab'], false],
    [['almost a palindrome'], false],
  ]);
});
