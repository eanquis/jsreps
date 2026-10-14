/**
 * Exercise 12 · Building strings
 *
 * Task:
 *   Return `word` followed by "!", repeated `times` times, with a space
 *   between each repetition:
 *     chant('go', 3) → "go! go! go!"
 *     chant('hey', 1) → "hey!"
 *     chant('go', 0) → ""
 *   Use a loop. Don't use .repeat().
 */

export function chant(word, times) {
  let text = '';
  for (let i = 1; i <= times; i++) {
    if (i > 1) {
      text += ' ';
    }
    text += `${word}!`;
  }
  return text;
}
