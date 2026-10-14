/**
 * Exercise 14 · Fix the bug: sort changes the original
 *
 * This function returns the three highest scores, and the result is right.
 * But after calling it, the caller's `scores` array has changed order!
 *
 * Task:
 *   Fix it so the original array is never changed.
 */

export function topThree(scores) {
  return scores.toSorted((a, b) => b - a).slice(0, 3);
}
