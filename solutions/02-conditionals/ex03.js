/**
 * Exercise 03 · if / else
 *
 * Task:
 *   Return "Access granted" when the password is "open sesame",
 *   and "Access denied" for anything else. Use `if` and `else`.
 */

export function checkPassword(password) {
  if (password === 'open sesame') {
    return 'Access granted';
  } else {
    return 'Access denied';
  }
}
