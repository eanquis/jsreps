/**
 * Exercise 17 · Rest parameters
 *
 * `...name` collects all the remaining arguments into an array:
 *
 *   function f(...values) { } // f(1, 2, 3) → values is [1, 2, 3]
 *
 * Task:
 *   Declare and export `sum(...numbers)`, which returns the sum of all the
 *   arguments it receives, however many there are. With no arguments,
 *   it returns 0. Use a rest parameter.
 */

export function sum(...numbers) {
  let total = 0;
  for (const n of numbers) {
    total += n;
  }
  return total;
}
