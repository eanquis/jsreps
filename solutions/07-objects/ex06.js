/**
 * Exercise 06 · Predict: objects and references
 *
 * A variable doesn't hold an object, it points to it. Two variables can
 * point to the same object.
 *
 * Task:
 *   Read the code below and, without running it, write each answer.
 *   Use true, false or a string.
 */

const a = { name: 'Ada' };
const b = { name: 'Ada' };
const c = a;
c.name = 'Grace';

export const answer1 = false;
export const answer2 = true;
export const answer3 = 'Grace';
export const answer4 = 'Ada';
