/**
 * Exercise 13 · Fix the bug: sorting numbers
 *
 * This function should sort numbers from smallest to largest, but
 * [10, 9, 1] comes back as [1, 10, 9].
 *
 * Task:
 *   Find out why and fix it.
 */

export function sortAscending(numbers) {
  return [...numbers].sort();
}
