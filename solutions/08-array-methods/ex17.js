/**
 * Exercise 17 · Fix the bug: returning objects
 *
 * This function should turn each word into an object like { label: 'js' },
 * but it returns [undefined, undefined, ...].
 *
 * Task:
 *   Find out why and fix it.
 */

export function toTags(words) {
  return words.map((word) => ({ label: word }));
}
