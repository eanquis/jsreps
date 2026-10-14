/**
 * Exercise 15 · Handling only what you expect
 *
 * `error instanceof ValidationError` tells you whether an error is a
 * ValidationError. Handle the errors you expect, and throw the others again:
 * hiding unexpected errors hides bugs.
 *
 * Task:
 *   Call `fn()` and return "ok" when it doesn't throw.
 *   - When it throws a ValidationError, return "Invalid: <message>".
 *   - When it throws any other error, throw it again.
 */

export class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = 'ValidationError';
  }
}

export function handle(fn) {
  // Write your code below this line.
}
