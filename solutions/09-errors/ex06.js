/**
 * Exercise 06 · try / catch
 *
 * `JSON.parse(text)` turns text like '{"a":1}' into a value, and throws a
 * SyntaxError when the text is not valid JSON. `try/catch` lets you handle
 * the error instead of crashing.
 *
 * Task:
 *   Return the parsed value of `text`. When the text is not valid JSON,
 *   return `null` instead. Use try/catch.
 */

export function parseJSON(text) {
  try {
    return JSON.parse(text);
  } catch (error) {
    return null;
  }
}
