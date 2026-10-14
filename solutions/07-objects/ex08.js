/**
 * Exercise 08 · Looping with for...in
 *
 * `for (const key in obj)` runs once for every key of an object.
 *
 * Task:
 *   `scores` maps player names to points, like { ada: 10, grace: 7 }.
 *   Return the sum of all the points. Use a for...in loop.
 */

export function totalScore(scores) {
  let total = 0;
  for (const name in scores) {
    total += scores[name];
  }
  return total;
}
