/**
 * Exercise 16 · Removing by index
 *
 * Task:
 *   Return a new array without the item at `index`.
 *   Don't change the array you received.
 */

export function removeAt(list, index) {
  return [...list.slice(0, index), ...list.slice(index + 1)];
}
