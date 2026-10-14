/**
 * Exercise 09 · Stopping early with break
 *
 * `break` ends a loop immediately, even if its condition is still true.
 * It's useful when you are searching for something and found it.
 *
 * Task:
 *   Return the first number that is greater than or equal to `start` and
 *   divisible by `divisor`. Use a loop with `break`.
 *   For example, firstMultiple(10, 7) is 14.
 */

export function firstMultiple(start, divisor) {
  let n = start;
  while (true) {
    if (n % divisor === 0) {
      break;
    }
    n++;
  }
  return n;
}
