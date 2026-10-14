/**
 * Exercise 20 · Challenge: parsing a config string
 *
 * Task:
 *   Turn a text like "theme=dark; lang=en" into an object:
 *   { theme: 'dark', lang: 'en' }
 *   - Entries are separated by ";" and spaces around keys and values are
 *     ignored. Empty entries (e.g. after a final ";") are skipped.
 *   - Values stay strings.
 *   - An entry without "=" or with an empty key is invalid: throw a
 *     SyntaxError with the message: Invalid entry "<entry>": expected key=value
 *     (use the trimmed entry).
 *   - A key that appears twice: throw an Error with the message:
 *     Duplicate key "<key>"
 *   A value may contain "=": "url=a=b" gives { url: 'a=b' }.
 */

export function parseConfig(text) {
  // Write your code below this line.
}
