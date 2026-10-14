/**
 * Exercise 08 · Fix the bug: the loop that never ends
 *
 * This function should count how many times you can divide `n` by 2
 * before it becomes smaller than 1. For example, 8 → 4 → 2 → 1 → 0.5
 * takes 4 divisions.
 *
 * But the loop never ends! The `safety` counter stops it after 1000 rounds
 * so your computer doesn't freeze.
 *
 * Task:
 *   Find out why the loop never ends and fix it.
 *   Once it works, you can remove the safety counter.
 */

export function halvings(n) {
  let count = 0;

  while (n >= 1) {
    n = n / 2;
    count++;
  }

  return count;
}
