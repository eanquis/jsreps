/**
 * Exercise 10 · Fix the bug: checking a range
 *
 * This function should accept percentages from 0 to 100, but it accepts
 * any number.
 *
 * Task:
 *   Find out why and fix it. Values from 0 to 100 (including both) are valid.
 */

export function isValidPercentage(n) {
  if (0 <= n && n <= 100) {
    return true;
  }
  return false;
}
