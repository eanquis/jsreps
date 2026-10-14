/**
 * Exercise 20 · Challenge: compressing text
 *
 * Task:
 *   Compress a text by replacing each group of repeated characters with the
 *   character followed by how many times it repeats.
 *   For example, "aaabccdddd" becomes "a3b1c2d4".
 *   An empty text stays empty.
 */

export function compress(text) {
  let result = '';
  let count = 1;
  for (let i = 0; i < text.length; i++) {
    if (text[i] === text[i + 1]) {
      count++;
    } else {
      result += text[i] + count;
      count = 1;
    }
  }
  return result;
}
