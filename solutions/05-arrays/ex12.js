/**
 * Exercise 12 · Reversing by hand
 *
 * Task:
 *   Return a new array with the items in reverse order.
 *   Don't use reverse() and don't change the array you received.
 */

export function reverse(list) {
  const reversed = [];
  for (let i = list.length - 1; i >= 0; i--) {
    reversed.push(list[i]);
  }
  return reversed;
}
