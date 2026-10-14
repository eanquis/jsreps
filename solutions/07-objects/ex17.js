/**
 * Exercise 17 · Copying and merging
 *
 * The spread operator copies all the properties of an object into a new one:
 *   const copy = { ...original };
 * When two objects have the same key, the one written last wins:
 *   { ...defaults, ...choices }
 *
 * Task:
 *   Return a new object with all the default settings, replaced by the user's
 *   settings where they exist. Don't change `defaults` or `userSettings`.
 *   Use the spread operator.
 */

export function mergeSettings(defaults, userSettings) {
  return { ...defaults, ...userSettings };
}
