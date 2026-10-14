/**
 * Exercise 14 · Ternary: absolute value
 *
 * The absolute value of a number is its distance from zero:
 * the absolute value of -5 is 5, and of 5 is also 5.
 *
 * Task:
 *   Return the absolute value of `n` using the ternary operator.
 *   Don't use `if` or `Math`.
 */

export function absolute(n) {
  return n < 0 ? -n : n;
}
