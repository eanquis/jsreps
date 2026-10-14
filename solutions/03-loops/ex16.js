/**
 * Exercise 16 · Nested loops: a triangle
 *
 * The inner loop doesn't have to run the same number of times every round.
 * It can depend on the variable of the outer loop.
 *
 * Task:
 *   Return a triangle of "*" with `height` lines. Line 1 has one star,
 *   line 2 has two, and so on. Lines are separated by "\n", with no line
 *   break at the end:
 *     triangle(3) → "*\n**\n***"
 *   Use two loops, one inside the other.
 */

export function triangle(height) {
  let text = '';
  for (let line = 1; line <= height; line++) {
    for (let star = 1; star <= line; star++) {
      text += '*';
    }
    if (line < height) {
      text += '\n';
    }
  }
  return text;
}
