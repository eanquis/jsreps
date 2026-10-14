/**
 * Exercise 02 · Your first while
 *
 * A `while` loop repeats its block as long as its condition is true:
 *
 *   let i = 1;
 *   while (i <= 3) {
 *     // runs with i = 1, 2, 3
 *     i++;
 *   }
 *
 * Task:
 *   Return the sum of all whole numbers from 1 to `n`.
 *   For example, sumUpTo(4) is 1 + 2 + 3 + 4 = 10. Use a `while` loop.
 */

export function sumUpTo(n) {
  let total = 0;
  let i = 1;
  while (i <= n) {
    total += i;
    i++;
  }
  return total;
}
