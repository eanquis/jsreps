/**
 * Exercise 05 · filter with a parameter
 *
 * The callback can use any variable around it, including the function's
 * other parameters.
 *
 * Task:
 *   Return the words that have at least `minLength` characters,
 *   using `.filter()`. Don't use loops.
 */

export function longWords(words, minLength) {
  return words.filter((word) => word.length >= minLength);
}
