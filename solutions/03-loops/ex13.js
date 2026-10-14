/**
 * Exercise 13 · Adding up digits
 *
 * Two tricks to take a number apart, digit by digit:
 * - n % 10 is the last digit: 1234 % 10 is 4
 * - Math.floor(n / 10) removes the last digit: Math.floor(1234 / 10) is 123
 *
 * Task:
 *   Return the sum of the digits of `n` (a whole number, 0 or more).
 *   For example, sumDigits(1234) is 1 + 2 + 3 + 4 = 10.
 *   Use a loop with % and Math.floor. Don't convert the number to a string.
 */

export function sumDigits(n) {
  let total = 0;
  while (n > 0) {
    total += n % 10;
    n = Math.floor(n / 10);
  }
  return total;
}
