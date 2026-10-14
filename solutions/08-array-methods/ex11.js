/**
 * Exercise 11 · reduce: the largest number
 *
 * The accumulated value doesn't have to be a sum. It can be anything:
 * the largest item seen so far, for example.
 *
 * Task:
 *   Return the largest number in the list using `.reduce()`.
 *   The list always has at least one number. Don't use loops.
 */

export function largest(numbers) {
  return numbers.reduce((max, n) => (n > max ? n : max));
}
