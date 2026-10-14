/**
 * Exercise 09 · Keys and values together
 *
 * Object.entries(obj) returns an array of [key, value] pairs:
 *   Object.entries({ a: 1 }) is [['a', 1]]
 *
 * Task:
 *   Return an array of strings in the format "key=value", one per property.
 *   For example, { size: 'M', color: 'red' } gives ['size=M', 'color=red'].
 *   Use Object.entries with a for...of loop.
 */

export function toQueryParts(obj) {
  const parts = [];
  for (const [key, value] of Object.entries(obj)) {
    parts.push(`${key}=${value}`);
  }
  return parts;
}
