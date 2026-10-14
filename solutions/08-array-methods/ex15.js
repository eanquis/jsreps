/**
 * Exercise 15 · Sorting objects
 *
 * The comparator receives two items. Return a negative number to put `a`
 * first, a positive number to put `b` first, and 0 to keep their order.
 *
 * Task:
 *   Return a new array with the people sorted by age, youngest first.
 *   People look like { name: 'Ada', age: 36 }.
 *   Don't change the original array.
 */

export function sortByAge(people) {
  return people.toSorted((a, b) => a.age - b.age);
}
