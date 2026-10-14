/**
 * Exercise 04 · else if
 *
 * Task:
 *   Return a label for the temperature, in degrees Celsius:
 *   - below 10: "cold"
 *   - from 10 up to (but not including) 25: "mild"
 *   - 25 or more: "hot"
 *   Use `if`, `else if` and `else`.
 */

export function temperatureLabel(celsius) {
  if (celsius < 10) {
    return 'cold';
  } else if (celsius < 25) {
    return 'mild';
  } else {
    return 'hot';
  }
}
