/**
 * Exercise 11 · Safe division
 *
 * `divide` throws when something is wrong. Instead of crashing, `safeDivide`
 * should turn the result into an object that says whether it worked.
 *
 * Task:
 *   Call `divide(a, b)` inside try/catch and return:
 *   - { ok: true, value: <result> } when it works
 *   - { ok: false, error: <the error's message> } when it throws
 */

function divide(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new TypeError('Both arguments must be numbers');
  }
  if (b === 0) {
    throw new RangeError('Cannot divide by zero');
  }
  return a / b;
}

export function safeDivide(a, b) {
  try {
    return { ok: true, value: divide(a, b) };
  } catch (error) {
    return { ok: false, error: error.message };
  }
}
