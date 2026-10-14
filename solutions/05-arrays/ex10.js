/**
 * Exercise 10 · Building a new array
 *
 * Start with an empty array and push the items you want to keep.
 *
 * Task:
 *   Return a new array with only the even numbers, in the same order.
 *   Don't change the array you received.
 */

export function evensOnly(numbers) {
  const evens = [];
  for (const n of numbers) {
    if (n % 2 === 0) {
      evens.push(n);
    }
  }
  return evens;
}
