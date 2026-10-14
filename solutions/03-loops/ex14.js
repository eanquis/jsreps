/**
 * Exercise 14 · do...while
 *
 * A `do...while` loop runs its block first and checks the condition after,
 * so the block always runs at least once:
 *
 *   do {
 *     // runs at least once
 *   } while (condition);
 *
 * Task:
 *   Return how many digits `n` has (a whole number, 0 or more).
 *   countDigits(12345) is 5, and countDigits(0) is 1.
 *   Use a `do...while` loop. Don't convert the number to a string.
 */

export function countDigits(n) {
  let count = 0;
  do {
    count++;
    n = Math.floor(n / 10);
  } while (n > 0);
  return count;
}
