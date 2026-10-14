/**
 * Exercise 13 · Fix the bug: throwing a string
 *
 * JavaScript lets you throw anything, even a string. But a string has no
 * `name`, no `message` and no stack trace showing where it came from,
 * so code that catches it can't handle it properly.
 *
 * Task:
 *   Throw a real Error with the same message.
 */

export function checkPassword(password) {
  if (password.length < 8) {
    throw new Error('Password too short');
  }
  return true;
}
