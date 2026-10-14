/**
 * Exercise 03 · map
 *
 * `.map(callback)` builds a NEW array, with whatever the callback returns
 * for each item. The original array stays the same.
 *
 * Task:
 *   Return a new array with every number doubled, using `.map()`.
 *   Don't use loops, and don't change `numbers`.
 */

export function doubleAll(numbers) {
  return numbers.map((n) => n * 2);
}
