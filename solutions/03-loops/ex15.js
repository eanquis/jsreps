/**
 * Exercise 15 · Nested loops: a rectangle
 *
 * A loop can contain another loop. For each round of the outer loop,
 * the inner loop runs completely.
 *
 * In a string, "\n" is a line break.
 *
 * Task:
 *   Return a rectangle of "*", `width` characters wide and `height` lines
 *   tall. Lines are separated by "\n", with no line break at the end:
 *     rectangle(3, 2) → "***\n***"
 *   Use two loops, one inside the other.
 */

export function rectangle(width, height) {
  let text = '';
  for (let line = 1; line <= height; line++) {
    for (let column = 1; column <= width; column++) {
      text += '*';
    }
    if (line < height) {
      text += '\n';
    }
  }
  return text;
}
