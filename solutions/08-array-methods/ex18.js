/**
 * Exercise 18 · flat and flatMap
 *
 * `.flat()` turns an array of arrays into one array:
 *   [[1, 2], [3]].flat(); // [1, 2, 3]
 *
 * `.flatMap(callback)` is a `.map()` followed by a `.flat()`.
 *
 * Task:
 *   Each post looks like { title: 'Hi', tags: ['news', 'js'] }.
 *   Return one array with the tags of all posts, in order.
 *   Use `.flat()` or `.flatMap()`. Don't use loops.
 */

export function allTags(posts) {
  return posts.flatMap((post) => post.tags);
}
