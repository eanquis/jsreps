/**
 * Exercise 06 · find
 *
 * `.find(callback)` returns the FIRST item for which the callback returns
 * true, or `undefined` when there is none.
 *
 * Task:
 *   Return the user whose `name` is `name`, or undefined if there is no
 *   such user. Use `.find()`. Each user looks like { name: 'Ada', age: 36 }.
 */

export function findUser(users, name) {
  return users.find((user) => user.name === name);
}
