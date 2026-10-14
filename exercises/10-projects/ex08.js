/**
 * Exercise 08 · Caesar cipher
 *
 * The Caesar cipher hides a message by shifting every letter a fixed number
 * of positions in the alphabet. With a shift of 3, "a" becomes "d" and "z"
 * wraps around to "c".
 *
 * Every character has a numeric code: 'a'.charCodeAt(0) is 97, 'b' is 98,
 * up to 'z', which is 122. Uppercase 'A' to 'Z' go from 65 to 90.
 * String.fromCharCode(100) turns a code back into a character: 'd'.
 *
 * Task:
 *   Return `text` with every letter shifted by `shift` positions.
 *   - Keep uppercase letters uppercase and lowercase letters lowercase.
 *   - Characters that are not letters (spaces, digits, punctuation) stay the same.
 *   - `shift` can be negative (shift backwards) or bigger than 26.
 *   caesar('Hello, World!', 3) → 'Khoor, Zruog!'
 */

export function caesar(text, shift) {
  // Write your code below this line.
}
