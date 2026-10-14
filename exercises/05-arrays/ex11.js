/**
 * Exercise 11 · Fix the bug: the array that changed
 *
 * This function returns the right scores, but it has a side effect: the
 * original array passed to it changes too. Whoever calls it loses the
 * original scores.
 *
 * Task:
 *   Fix it so the original array is never changed.
 */

export function withBonus(scores) {
  const result = scores;
  for (let i = 0; i < result.length; i++) {
    result[i] = result[i] + 10;
  }
  return result;
}
