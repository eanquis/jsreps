/**
 * Exercise 12 · Fix the bug: pure functions
 *
 * A pure function only depends on its parameters and changes nothing
 * outside itself: the same input always gives the same output.
 *
 * This function changes variables outside itself, so calling it twice
 * gives different results.
 *
 * Task:
 *   Rewrite `applyDiscount` as a pure function `applyDiscount(price, discount)`
 *   that returns the price minus the discount.
 *   Remove the variables declared outside the function.
 */

export function applyDiscount(price, discount) {
  return price - discount;
}
