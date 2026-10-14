/**
 * Exercise 15 · Closures: a counter
 *
 * A function created inside another function remembers the variables
 * around it, even after the outer function has finished. This is a closure.
 *
 * Task:
 *   Declare and export `makeCounter()`. It returns a new function.
 *   Each call to that new function returns the next number: 1, then 2,
 *   then 3... Every counter created by `makeCounter()` counts on its own.
 */

export function makeCounter() {
  let count = 0;
  return function () {
    count++;
    return count;
  };
}
