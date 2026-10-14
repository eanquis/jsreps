/**
 * Exercise 16 · Closures: function factories
 *
 * A function can create and return other functions, configured by its
 * parameters.
 *
 * Task:
 *   Declare and export `makeMultiplier(factor)`. It returns a function that
 *   receives a number and returns that number multiplied by `factor`.
 *
 *   const double = makeMultiplier(2);
 *   double(5); // 10
 */

export function makeMultiplier(factor) {
  return (n) => n * factor;
}
