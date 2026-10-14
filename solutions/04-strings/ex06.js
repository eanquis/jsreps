/**
 * Exercise 06 · Searching inside a string
 *
 * `text.includes(part)` returns true when `part` appears inside `text`.
 *
 * Task:
 *   Return `true` when the message contains the words "free money",
 *   in any combination of uppercase and lowercase. Use .includes().
 */

export function isSpam(message) {
  return message.toLowerCase().includes('free money');
}
