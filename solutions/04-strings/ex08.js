/**
 * Exercise 08 · Finding a position
 *
 * `text.indexOf(part)` returns the position where `part` first appears,
 * or -1 when it doesn't appear at all.
 *
 * Task:
 *   Return `true` when the email has an "@" that is neither the first nor
 *   the last character. Return `false` otherwise. Use .indexOf().
 */

export function hasValidAt(email) {
  const position = email.indexOf('@');
  return position > 0 && position < email.length - 1;
}
