/**
 * Exercise 20 · Challenge: FizzBuzz
 *
 * Task:
 *   Return:
 *   - "FizzBuzz" when `n` is divisible by both 3 and 5
 *   - "Fizz" when it is divisible by 3
 *   - "Buzz" when it is divisible by 5
 *   - the number itself, as a string, in every other case (e.g. "7")
 */

export function fizzBuzz(n) {
  if (n % 15 === 0) {
    return 'FizzBuzz';
  }
  if (n % 3 === 0) {
    return 'Fizz';
  }
  if (n % 5 === 0) {
    return 'Buzz';
  }
  return String(n);
}
