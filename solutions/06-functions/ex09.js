/**
 * Exercise 09 · Early return
 *
 * `return` ends the function right away. Handling special cases first with
 * an early return (a "guard clause") keeps the rest of the code simple.
 *
 * Task:
 *   Return `null` when `b` is 0, because dividing by zero makes no sense.
 *   Otherwise, return `a` divided by `b`.
 *   Handle the special case first, with an early return and no `else`.
 */

export function safeDivide(a, b) {
  if (b === 0) {
    return null;
  }
  return a / b;
}
