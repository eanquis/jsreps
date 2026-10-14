/**
 * Exercise 08 · The biggest number
 *
 * Task:
 *   Return the biggest number in the list. The list is never empty.
 *   Find it yourself with a loop: don't use Math or sort.
 */

export function max(numbers) {
  let biggest = numbers[0];
  for (const n of numbers) {
    if (n > biggest) {
      biggest = n;
    }
  }
  return biggest;
}
