/**
 * Exercise 07 · Arrow functions
 *
 * Arrow functions are a shorter way to write function expressions:
 *
 *   const add = (a, b) => a + b;
 *
 * Without curly braces, the value after => is returned automatically.
 *
 * Task:
 *   Declare and export a constant `isEven` with an arrow function that
 *   receives a number and returns `true` if it is even, `false` otherwise.
 *   Write it without curly braces and without `return`.
 */

export const isEven = (n) => n % 2 === 0;
