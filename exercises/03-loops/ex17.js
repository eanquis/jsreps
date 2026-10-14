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
  for (let i = 1; i <= n; i++) {
    let total = 0;
    total += i * i;
  }
  return total;
}
