/**
 * Exercise 19 · Challenge: collecting every problem
 *
 * Throwing stops at the first problem. In a form, it's friendlier to show
 * all the problems at once.
 *
 * Task:
 *   Return an array with every problem found in `form`, in this order
 *   (an empty array when everything is valid):
 *   - "username is required" when username is missing or empty
 *   - "username must be at least 3 characters" when it has 1 or 2 characters
 *   - "password must be at least 8 characters"
 *   - "password must contain a number" when it has no digit (0-9)
 *   - "age must be a number" when age is not a number
 *   - "age must be 13 or older" when age is a number below 13
 *   `password` is always a string.
 */

const DIGITS = '0123456789';

export function validateSignup(form) {
  const errors = [];

  if (!form.username) {
    errors.push('username is required');
  } else if (form.username.length < 3) {
    errors.push('username must be at least 3 characters');
  }

  if (form.password.length < 8) {
    errors.push('password must be at least 8 characters');
  }
  if (![...form.password].some((char) => DIGITS.includes(char))) {
    errors.push('password must contain a number');
  }

  if (typeof form.age !== 'number') {
    errors.push('age must be a number');
  } else if (form.age < 13) {
    errors.push('age must be 13 or older');
  }

  return errors;
}
