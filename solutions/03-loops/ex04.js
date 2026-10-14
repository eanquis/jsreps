/**
 * Exercise 04 · Counting down
 *
 * Loops can count down too: start high and decrease with -- each round.
 * Strings can be built piece by piece with +=.
 *
 * Task:
 *   Return a countdown from `n` to 1, followed by "Liftoff!".
 *   Each number is followed by "... ":
 *     countdown(3) → "3... 2... 1... Liftoff!"
 *     countdown(0) → "Liftoff!"
 */

export function countdown(n) {
  let text = '';
  for (let i = n; i >= 1; i--) {
    text += `${i}... `;
  }
  return text + 'Liftoff!';
}
