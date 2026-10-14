/**
 * Exercise 04 · Validating ranges
 *
 * Use a RangeError when a value has the right type but is outside the
 * accepted range.
 *
 * Task:
 *   Return "Volume: <level>" (e.g. "Volume: 7").
 *   When `level` is below 0 or above 10, throw a RangeError with the message
 *   "Volume must be between 0 and 10".
 */

export function setVolume(level) {
  if (level < 0 || level > 10) {
    throw new RangeError('Volume must be between 0 and 10');
  }
  return `Volume: ${level}`;
}
