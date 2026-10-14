/**
 * Exercise 05 · Ignoring case
 *
 * 'Hello' === 'hello' is false: uppercase and lowercase letters are
 * different characters.
 *
 * Task:
 *   Return `true` when `a` and `b` are the same word, ignoring the case of
 *   the letters, and `false` otherwise.
 */

export function sameWord(a, b) {
  return a.toLowerCase() === b.toLowerCase();
}
