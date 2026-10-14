/**
 * Exercise 07 · AND
 *
 * `a && b` is true only when both `a` and `b` are true.
 *
 * Task:
 *   Return `true` when the person can drive: they must be at least 18
 *   AND have a license. Return `false` otherwise. Use &&.
 */

export function canDrive(age, hasLicense) {
  return age >= 18 && hasLicense;
}
