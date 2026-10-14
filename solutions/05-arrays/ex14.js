/**
 * Exercise 14 · split and join
 *
 * - text.split(separator) breaks a string into an array of pieces.
 * - list.join(separator) glues the items of an array into a string.
 *
 * Task:
 *   Turn a title into a "slug" for a web address: all lowercase, with the
 *   words joined by "-". Words are separated by single spaces.
 *   "Hello World" → "hello-world". Use split() and join(), not replace.
 */

export function slugify(title) {
  return title.toLowerCase().split(' ').join('-');
}
