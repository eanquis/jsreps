/**
 * Exercise 12 · reduce: counting
 *
 * The accumulated value can also be an object, which works like a
 * dictionary: one key per word, and how many times it appeared.
 *
 * Task:
 *   Return an object that counts how many times each word appears.
 *   For ['a', 'b', 'a'] return { a: 2, b: 1 }. Use `.reduce()`.
 */

export function countOccurrences(words) {
  return words.reduce((counts, word) => {
    counts[word] = (counts[word] ?? 0) + 1;
    return counts;
  }, {});
}
