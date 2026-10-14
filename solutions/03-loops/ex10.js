/**
 * Exercise 10 · Skipping with continue
 *
 * `continue` skips the rest of the current round and jumps to the next one.
 *
 * Task:
 *   Return the sum of the numbers from 1 to `n`, skipping every number that
 *   is divisible by `skip`. Use `continue`.
 *   For example, sumSkipping(10, 3) is 55 - (3 + 6 + 9) = 37.
 */

export function sumSkipping(n, skip) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    if (i % skip === 0) {
      continue;
    }
    total += i;
  }
  return total;
}
