/**
 * Exercise 04 · Fix the bug: a constant can't change
 *
 * This code crashes. A variable declared with `const` can never be
 * reassigned, but the player needs to earn more points.
 *
 * Task:
 *   Fix the declaration so `score` can change.
 *   Keep the line `score = 15;` exactly as it is.
 */

const score = 10;

// The player earned 5 more points.
score = 15;

export { score };
