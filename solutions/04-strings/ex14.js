/**
 * Exercise 14 · Counting a character
 *
 * A `for...of` loop goes through a string one character at a time:
 *
 *   for (const char of 'abc') { ... } // 'a', then 'b', then 'c'
 *
 * Task:
 *   Return how many times `char` appears in `text`. Uppercase and lowercase
 *   letters count as different characters. Use a loop.
 */

export function countChar(text, char) {
  let count = 0;
  for (const current of text) {
    if (current === char) {
      count++;
    }
  }
  return count;
}
