/**
 * Exercise 19 · Challenge: leap years
 *
 * Task:
 *   Return `true` if `year` is a leap year, `false` otherwise.
 *   A year is a leap year when:
 *   - it is divisible by 4,
 *   - except years divisible by 100, which are not leap years,
 *   - except years divisible by 400, which are leap years after all.
 */

export function isLeapYear(year) {
  if (year % 400 === 0) {
    return true;
  }
  if (year % 100 === 0) {
    return false;
  }
  return year % 4 === 0;
}
