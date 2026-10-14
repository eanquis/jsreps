/**
 * Exercise 04 · Cleaning up input
 *
 * People type emails with extra spaces and random capital letters.
 * `text.trim()` removes spaces (and tabs, and line breaks) from both ends.
 *
 * Task:
 *   Return the email without spaces around it and in lowercase.
 *   For example, "  Ada@Example.COM " becomes "ada@example.com".
 */

export function normalizeEmail(email) {
  return email.trim().toLowerCase();
}
