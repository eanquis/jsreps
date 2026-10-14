/**
 * Exercise 07 · Beginnings and endings
 *
 * `text.startsWith(part)` and `text.endsWith(part)` check how a string
 * begins and ends.
 *
 * Task:
 *   Describe a file by its name:
 *   - names starting with "." are "hidden" (this rule comes first)
 *   - names ending with ".js" are "javascript"
 *   - names ending with ".md" are "markdown"
 *   - anything else is "other"
 *   Use .startsWith() and .endsWith().
 */

export function describeFile(name) {
  if (name.startsWith('.')) {
    return 'hidden';
  }
  if (name.endsWith('.js')) {
    return 'javascript';
  }
  if (name.endsWith('.md')) {
    return 'markdown';
  }
  return 'other';
}
