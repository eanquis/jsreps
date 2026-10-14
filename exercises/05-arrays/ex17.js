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

export const answer1 = undefined; // original.length
export const answer2 = undefined; // copy.length
export const answer3 = undefined; // original === sameArray
export const answer4 = undefined; // original === copy
