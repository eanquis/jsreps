/**
 * Exercise 04 · Anagrams
 *
 * Two words are anagrams when they use exactly the same letters, the same
 * number of times: "listen" and "silent".
 *
 * Task:
 *   Return `true` when `a` and `b` are anagrams of each other.
 *   Ignore uppercase and spaces: 'Dormitory' and 'dirty room' are anagrams.
 */

function sortedLetters(text) {
  return text.toLowerCase().replaceAll(' ', '').split('').sort().join('');
}

export function areAnagrams(a, b) {
  return sortedLetters(a) === sortedLetters(b);
}
