/**
 * Exercise 14 · Custom errors
 *
 * You can create your own kind of error by extending Error:
 *
 *   class NotFoundError extends Error {
 *     constructor(message) {
 *       super(message);
 *       this.name = 'NotFoundError';
 *     }
 *   }
 *
 * Task:
 *   1. Declare and export a class `ValidationError` that extends Error and
 *      has the name "ValidationError".
 *   2. In `validateEmail`, throw a ValidationError with the message
 *      "Email must contain @" when `email` has no "@". Otherwise return true.
 */

// Write your code below this line.

export function validateEmail(email) {
  // Write your code below this line.
}
