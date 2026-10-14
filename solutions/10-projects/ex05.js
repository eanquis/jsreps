/**
 * Exercise 05 · Word frequency
 *
 * Task:
 *   Return an object that counts how many times each word appears in `text`.
 *   - Words are lowercase in the result: "The" and "the" are the same word.
 *   - Ignore the punctuation marks . , ! and ?
 *   - Words can be separated by one or more spaces.
 *   wordFrequency('The cat and the hat.') → { the: 2, cat: 1, and: 1, hat: 1 }
 *   An empty text returns an empty object.
 */

export function wordFrequency(text) {
  const counts = {};
  const words = text.toLowerCase().replace(/[.,!?]/g, '').split(' ');
  for (const word of words) {
    if (word === '') continue;
    counts[word] = (counts[word] ?? 0) + 1;
  }
  return counts;
}
