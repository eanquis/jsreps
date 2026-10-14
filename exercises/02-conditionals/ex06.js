/**
 * Exercise 06 · Fix the bug: comparing or assigning?
 *
 * This function should tell whether `n` is zero, but it never does.
 *
 * Task:
 *   Find the bug and fix it.
 */

export function isZero(n) {
  if (n = 0) {
    return true;
  }
  return false;
}
