/**
 * Exercise 19 · Challenge: countdown
 *
 * Task:
 *   Declare and export `countdown(n)`, which returns a string counting down
 *   from `n` to 1, followed by "Liftoff!":
 *
 *   countdown(3); // "3 2 1 Liftoff!"
 *   countdown(0); // "Liftoff!"
 *
 *   Use recursion, without loops.
 */

export function countdown(n) {
  if (n === 0) {
    return 'Liftoff!';
  }
  return `${n} ${countdown(n - 1)}`;
}
