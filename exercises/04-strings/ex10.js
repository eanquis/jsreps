/**
 * Exercise 10 · Fix the bug: strings can't change
 *
 * This function should return the word with its first letter in uppercase,
 * but it crashes.
 *
 * Task:
 *   Find out why and fix it. Strings can't be changed in place: you have to
 *   build a new one.
 */

export function capitalize(word) {
  word[0] = word[0].toUpperCase();
  return word;
}
