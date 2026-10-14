/**
 * Exercise 18 · Trying again
 *
 * Some operations fail now and then (a network request, for example).
 * A common solution is to try again a few times.
 *
 * Task:
 *   Call `task()` up to `times` times.
 *   - As soon as a call works, return its result.
 *   - If every call throws, throw the error from the last attempt.
 */

export function retry(task, times) {
  let lastError;
  for (let attempt = 1; attempt <= times; attempt++) {
    try {
      return task();
    } catch (error) {
      lastError = error;
    }
  }
  throw lastError;
}
