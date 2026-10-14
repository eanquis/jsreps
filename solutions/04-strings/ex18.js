/**
 * Exercise 18 · Initials
 *
 * Task:
 *   Return the initials of a full name, in uppercase, each followed by a dot.
 *   For example, "Ada Lovelace" becomes "A.L." and
 *   "grace brewster hopper" becomes "G.B.H.".
 *   Names are separated by a single space.
 */

export function initials(fullName) {
  let result = '';
  for (let i = 0; i < fullName.length; i++) {
    if (i === 0 || fullName[i - 1] === ' ') {
      result += fullName[i].toUpperCase() + '.';
    }
  }
  return result;
}
