/**
 * Exercise 19 · Challenge: prime numbers
 *
 * A prime number is a whole number greater than 1 that can only be divided
 * evenly by 1 and by itself. 2, 3, 5, 7, 11 and 13 are primes; 4, 6, 9 and
 * 15 are not.
 *
 * Task:
 *   Return `true` if `n` is a prime number, `false` otherwise.
 */

export function isPrime(n) {
  if (n < 2) {
    return false;
  }
  for (let divisor = 2; divisor * divisor <= n; divisor++) {
    if (n % divisor === 0) {
      return false;
    }
  }
  return true;
}
