/**
 * Exercise 16 · Fix the bug: the missing return
 *
 * This function should return the square of each number, but it returns
 * [undefined, undefined, ...].
 *
 * Task:
 *   Find out why and fix it.
 */

export function squares(numbers) {
  return numbers.map((n) => {
    return n * n;
  });
}
