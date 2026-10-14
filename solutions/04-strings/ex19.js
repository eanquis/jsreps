/**
 * Exercise 19 · Challenge: palindromes
 *
 * A palindrome reads the same backwards and forwards, like "racecar".
 *
 * Task:
 *   Return `true` when `text` is a palindrome, `false` otherwise.
 *   Ignore spaces and the case of the letters:
 *   "Never odd or even" is a palindrome.
 */

export function isPalindrome(text) {
  const cleaned = text.toLowerCase().replaceAll(' ', '');
  let reversed = '';
  for (const char of cleaned) {
    reversed = char + reversed;
  }
  return cleaned === reversed;
}
