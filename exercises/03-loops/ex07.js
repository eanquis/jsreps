/**
 * Exercise 07 · Fix the bug: off by one
 *
 * This function should add every number from `from` to `to`, including
 * both ends, but its results are a little too small.
 *
 * Task:
 *   Find the bug and fix it.
 *   For example, sumRange(1, 5) should be 1 + 2 + 3 + 4 + 5 = 15.
 */

export function sumRange(from, to) {
  let total = 0;
  for (let i = from; i < to; i++) {
    total += i;
  }
  return total;
}
