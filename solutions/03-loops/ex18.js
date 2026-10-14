/**
 * Exercise 18 · Nested loops: the times table
 *
 * Task:
 *   Return a multiplication grid with `size` lines and `size` columns.
 *   The value at line L, column C is L × C. Values in a line are separated
 *   by a space, and lines by "\n", with no extra space or line break at the
 *   end of lines:
 *     timesGrid(3) → "1 2 3\n2 4 6\n3 6 9"
 */

export function timesGrid(size) {
  let text = '';
  for (let line = 1; line <= size; line++) {
    for (let column = 1; column <= size; column++) {
      text += line * column;
      if (column < size) {
        text += ' ';
      }
    }
    if (line < size) {
      text += '\n';
    }
  }
  return text;
}
