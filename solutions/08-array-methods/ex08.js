/**
 * Exercise 08 · some and every
 *
 * `.some(callback)` is true when the callback is true for AT LEAST ONE item.
 * `.every(callback)` is true when the callback is true for ALL items.
 *
 * Task:
 *   1. `hasAdult`: return true if at least one age is 18 or more. Use `.some()`.
 *   2. `allPassed`: return true if every score is 60 or more. Use `.every()`.
 */

export function hasAdult(ages) {
  return ages.some((age) => age >= 18);
}

export function allPassed(scores) {
  return scores.every((score) => score >= 60);
}
