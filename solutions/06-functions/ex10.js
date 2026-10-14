/**
 * Exercise 10 · Functions calling functions
 *
 * Small functions can be combined to build bigger ones.
 *
 * Task:
 *   1. Declare and export `square(n)`, which returns n times n.
 *   2. Declare and export `sumOfSquares(a, b)`, which returns the square
 *      of `a` plus the square of `b`. It must call `square`.
 */

export function square(n) {
  return n * n;
}

export function sumOfSquares(a, b) {
  return square(a) + square(b);
}
