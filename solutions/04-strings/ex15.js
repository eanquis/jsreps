/**
 * Exercise 15 · Counting vowels
 *
 * Task:
 *   Return how many vowels (a, e, i, o, u) `text` has, counting both
 *   uppercase and lowercase. Use a loop.
 */

export function countVowels(text) {
  let count = 0;
  for (const char of text.toLowerCase()) {
    if ('aeiou'.includes(char)) {
      count++;
    }
  }
  return count;
}
