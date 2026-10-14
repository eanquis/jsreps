/**
 * Exercise 13 · The ternary operator
 *
 * `condition ? a : b` returns `a` when the condition is true, `b` otherwise.
 *
 * Task:
 *   Return "1 item" when `count` is 1, and "<count> items" otherwise
 *   (e.g. "0 items", "3 items"). Use the ternary operator, not `if`.
 */

export function itemLabel(count) {
  return count === 1 ? '1 item' : `${count} items`;
}
