/**
 * Exercise 10 · reduce: adding everything up
 *
 * `.reduce(callback, initialValue)` combines all items into ONE value.
 * The callback receives the value accumulated so far and the current item,
 * and returns the new accumulated value.
 *
 *   [1, 2, 3].reduce((accumulated, n) => accumulated + n, 0); // 6
 *
 * Task:
 *   Return the sum of all prices using `.reduce()`.
 *   An empty list costs 0. Don't use loops.
 */

export function total(prices) {
  return prices.reduce((sum, price) => sum + price, 0);
}
