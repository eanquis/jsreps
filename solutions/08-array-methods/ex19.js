/**
 * Exercise 19 · Challenge: group by first letter
 *
 * Task:
 *   Return an object that groups the words by their first letter.
 *   Each key is a letter, and its value is the list of words starting with
 *   it, in their original order:
 *
 *     ['apple', 'banana', 'avocado'] → { a: ['apple', 'avocado'], b: ['banana'] }
 *
 *   Use `.reduce()`. Don't use loops.
 */

export function groupByFirstLetter(words) {
  return words.reduce((groups, word) => {
    const letter = word[0];
    if (!groups[letter]) {
      groups[letter] = [];
    }
    groups[letter].push(word);
    return groups;
  }, {});
}
