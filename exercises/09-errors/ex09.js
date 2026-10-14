/**
 * Exercise 09 · finally
 *
 * A `finally` block always runs: after `try` succeeds, after `catch`, and
 * even when an error escapes the function.
 *
 * Task:
 *   Set `lock.locked` to true, run `action()` and return its result.
 *   Whatever happens, `lock.locked` must be false at the end, even when
 *   `action` throws. Don't catch the error: let it reach the caller.
 *   Use `finally`.
 */

export function withLock(lock, action) {
  lock.locked = true;
  const result = action();
  lock.locked = false;
  return result;
}
