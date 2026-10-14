/**
 * Exercise 02 · Title case
 *
 * Task:
 *   Return the sentence with the first letter of every word in uppercase and
 *   all the other letters in lowercase. Words are separated by single spaces.
 *   titleCase('the lord OF the rings') → 'The Lord Of The Rings'
 *   An empty string stays empty.
 */

export function titleCase(sentence) {
  return sentence
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
}
