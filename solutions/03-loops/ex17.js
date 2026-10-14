/**
 * Exercise 17 · Fix the bug: the accumulator
 *
 * This function should return 1² + 2² + ... + n². For example,
 * sumOfSquares(3) is 1 + 4 + 9 = 14. But it crashes.
 *
 * Task:
 *   Find out why and fix it.
 */

export function sumOfSquares(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i * i;
  }
  return total;
}
