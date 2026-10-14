/**
 * Exercise 19 · Challenge: the most common word
 *
 * Task:
 *   Return the word that appears the most in `text`.
 *   - Words are separated by single spaces.
 *   - Ignore case: "Go" and "go" are the same word. Return it in lowercase.
 *   - If there is a tie, return the word that appeared first in the text.
 */

export function mostCommonWord(text) {
  const counts = {};
  for (const word of text.toLowerCase().split(' ')) {
    counts[word] = (counts[word] ?? 0) + 1;
  }

  let winner = '';
  let winnerCount = 0;
  for (const word in counts) {
    if (counts[word] > winnerCount) {
      winner = word;
      winnerCount = counts[word];
    }
  }
  return winner;
}
