/**
 * Exercise 09 · Average, safely
 *
 * Strings also have a length, so checking `.length` isn't enough to know
 * that a value is an array. `Array.isArray(value)` is.
 *
 * Task:
 *   Return the average of the numbers (their sum divided by how many there
 *   are). Return 0 when the list is empty or when `numbers` isn't an array.
 */

export function average(numbers) {
  if (!Array.isArray(numbers) || numbers.length === 0) {
    return 0;
  }
  let total = 0;
  for (const n of numbers) {
    total += n;
  }
  return total / numbers.length;
}
