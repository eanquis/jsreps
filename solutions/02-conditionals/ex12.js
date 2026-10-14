/**
 * Exercise 12 · Using truthiness
 *
 * Task:
 *   Return "Hello, <name>!" when a name is given.
 *   When there is no name (an empty string, undefined or null),
 *   return "Hello, stranger!".
 */

export function greet(name) {
  if (name) {
    return `Hello, ${name}!`;
  }
  return 'Hello, stranger!';
}
