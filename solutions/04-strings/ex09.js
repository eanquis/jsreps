/**
 * Exercise 09 · Cutting a piece
 *
 * `text.slice(start, end)` returns the characters from position `start` up
 * to, but not including, position `end`. Without `end`, it goes to the end.
 *
 *   'JavaScript'.slice(0, 4) → 'Java'
 *   'JavaScript'.slice(4)    → 'Script'
 *
 * Task:
 *   Return the domain of an email: everything after the "@".
 *   For example, "ada@example.com" becomes "example.com". Use .slice().
 */

export function domain(email) {
  return email.slice(email.indexOf('@') + 1);
}
