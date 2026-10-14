/**
 * Exercise 05 · Default parameters
 *
 * A parameter can have a default value, used when no argument is given:
 *
 *   function f(x = 1) { ... }
 *
 * Task:
 *   Declare and export a function `greet(name)` that returns
 *   "Hello, <name>!". When it is called without a name, `name` should be
 *   "friend". Use a default parameter.
 */

export function greet(name = 'friend') {
  return `Hello, ${name}!`;
}
