/**
 * Exercise 05 · Guard clauses
 *
 * A guard clause checks for a problem at the top of a function and throws
 * (or returns) right away. The main code stays flat, without `else`.
 *
 * Task:
 *   Return the price after applying a discount of `percent` %.
 *   Check, in this order, and throw:
 *   - a TypeError "price must be a number" when price is not a number
 *   - a TypeError "percent must be a number" when percent is not a number
 *   - a RangeError "percent must be between 0 and 100" when it is outside 0-100
 *   Use guard clauses: don't use `else`.
 */

export function discountedPrice(price, percent) {
  if (typeof price !== 'number') {
    throw new TypeError('price must be a number');
  }
  if (typeof percent !== 'number') {
    throw new TypeError('percent must be a number');
  }
  if (percent < 0 || percent > 100) {
    throw new RangeError('percent must be between 0 and 100');
  }
  return price - (price * percent) / 100;
}
