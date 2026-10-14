/**
 * Exercise 04 · Fix the bug: showing is not returning
 *
 * `console.log` only prints a value on the screen. The code that called the
 * function never receives it.
 *
 * Task:
 *   `double(4)` should give back 8, but it gives back undefined. Fix it.
 */

export function double(n) {
  console.log(n * 2);
}
