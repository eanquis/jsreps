/**
 * Exercise 06 · Summing with for
 *
 * A `for` loop can visit every index, from 0 up to length - 1:
 *
 *   for (let i = 0; i < list.length; i++) { ... list[i] ... }
 *
 * Task:
 *   Return the sum of all numbers. An empty list sums to 0.
 *   Use a `for` loop.
 */

export function sum(numbers) {
  let total = 0;
  for (let i = 0; i < numbers.length; i++) {
    total += numbers[i];
  }
  return total;
}
