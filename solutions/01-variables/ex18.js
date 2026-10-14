/**
 * Exercise 18 · Converting text to numbers
 *
 * What a user types always arrives as a string. `Number(text)` converts a
 * string into a number.
 *
 * Task:
 *   1. Declare and export `age`: the number inside `input`, using Number().
 *   2. Declare and export `ageNextYear`: one more than `age`.
 */

const input = '42';

export const age = Number(input);
export const ageNextYear = age + 1;
