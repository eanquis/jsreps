/**
 * Exercise 10 · Parsing user input safely
 *
 * `Number(text)` returns NaN when the text is not a number, and
 * `Number.isNaN(value)` tells you whether a value is NaN.
 * Careful: `Number('')` and `Number('  ')` are 0, not NaN!
 *
 * Task:
 *   Convert `text` to a number and return it.
 *   - Throw a TypeError "Age must be a number" when the text is empty
 *     (or only spaces) or is not a number.
 *   - Throw a RangeError "Age cannot be negative" when the number is below 0.
 */

export function parseAge(text) {
  const age = Number(text);
  if (text.trim() === '' || Number.isNaN(age)) {
    throw new TypeError('Age must be a number');
  }
  if (age < 0) {
    throw new RangeError('Age cannot be negative');
  }
  return age;
}
