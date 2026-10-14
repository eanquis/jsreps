/**
 * Exercise 06 · Counting with conditions
 *
 * Loops and `if` work great together: go through every number and count
 * only the ones you care about.
 *
 * Task:
 *   Return how many numbers from 1 to `n` (including n) are divisible
 *   by `divisor`. For example, countMultiples(10, 3) is 3: 3, 6 and 9.
 */

export function countMultiples(n, divisor) {
  let count = 0;
  for (let i = 1; i <= n; i++) {
    if (i % divisor === 0) {
      count++;
    }
  }
  return count;
}
