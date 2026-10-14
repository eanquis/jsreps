/**
 * Exercise 16 · A validated createUser
 *
 * Task:
 *   Return a user object { name, age }, with the name trimmed.
 *   Check, in this order, and throw:
 *   - a TypeError "name must be a non-empty string" when name is not a string,
 *     or is empty after trimming
 *   - a TypeError "age must be an integer" when age is not an integer
 *     (Number.isInteger can help)
 *   - a RangeError "age must be between 0 and 150" when it is outside 0-150
 */

export function createUser(name, age) {
  if (typeof name !== 'string' || name.trim() === '') {
    throw new TypeError('name must be a non-empty string');
  }
  if (!Number.isInteger(age)) {
    throw new TypeError('age must be an integer');
  }
  if (age < 0 || age > 150) {
    throw new RangeError('age must be between 0 and 150');
  }
  return { name: name.trim(), age };
}
