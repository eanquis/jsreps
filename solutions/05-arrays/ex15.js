/**
 * Exercise 15 · Spreading arrays
 *
 * The spread syntax `...list` unpacks the items of an array inside
 * another one: [...a] is a copy of `a`, [0, ...a] adds 0 before them.
 *
 * Task:
 *   Return a new array with the items of `a` followed by the items of `b`.
 *   Use spread, and don't change `a` or `b`.
 */

export function merge(a, b) {
  return [...a, ...b];
}
