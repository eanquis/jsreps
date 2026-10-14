/**
 * Exercise 16 · Fix the bug: reversing
 *
 * This function should return the text backwards ("hello" → "olleh"),
 * but the result has something strange in it.
 *
 * Task:
 *   Find the bug and fix it. Keep using the loop.
 */

export function reverse(text) {
  let result = '';
  for (let i = text.length - 1; i >= 0; i--) {
    result += text[i];
  }
  return result;
}
