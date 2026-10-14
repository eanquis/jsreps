/**
 * Exercise 17 · Predict: copies and references
 *
 * A variable doesn't hold the array itself, only a reference to it.
 * Two variables can point to the same array.
 *
 * Task:
 *   Without running the code, write the value of each expression.
 *   Write the values themselves, don't reference the variables.
 */

const original = [1, 2, 3];
const sameArray = original;
const copy = [...original];

sameArray.push(4);
copy.push(5);

export const answer1 = 4;
export const answer2 = 4;
export const answer3 = true;
export const answer4 = false;
