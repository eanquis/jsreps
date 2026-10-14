/**
 * Exercise 07 · Counting with for...of
 *
 * When you don't need the index, `for...of` gives you each item directly:
 *
 *   for (const item of list) { ... }
 *
 * Task:
 *   Return how many times `target` appears in `list`. Use `for...of`.
 */

export function countMatches(list, target) {
  let count = 0;
  for (const item of list) {
    if (item === target) {
      count++;
    }
  }
  return count;
}
