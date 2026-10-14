/**
 * Exercise 13 · Fix the bug: calling a function
 *
 * Writing a function's name gives you the function itself.
 * Only the parentheses () actually run it.
 *
 * Task:
 *   `shout()` should return "Hello!", but it returns something strange.
 *   Find the bug and fix it.
 */

function getGreeting() {
  return 'Hello';
}

export function shout() {
  return getGreeting + '!';
}
