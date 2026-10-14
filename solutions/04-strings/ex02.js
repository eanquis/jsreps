/**
 * Exercise 02 · First and last
 *
 * Task:
 *   Return the first character of `word` followed by its last character.
 *   For example, "cat" becomes "ct".
 */

export function firstAndLast(word) {
  return word[0] + word.at(-1);
}
