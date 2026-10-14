/**
 * Exercise 05 · Does the key exist?
 *
 * A property can exist and still hold a "falsy" value like false, 0 or
 * undefined. To know if a key exists, use `key in obj` or Object.hasOwn(obj, key).
 *
 * Task:
 *   Return true when `settings` has a property named `key`, false otherwise,
 *   whatever its value is.
 */

export function hasSetting(settings, key) {
  return Object.hasOwn(settings, key);
}
