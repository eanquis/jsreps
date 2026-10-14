/**
 * Exercise 13 · Fix the bug: invalid names
 *
 * Variable names can't start with a number, can't contain `-`, and can't be
 * reserved words like `new` or `class`. JavaScript uses camelCase:
 * the first word in lowercase, the next ones starting with uppercase.
 *
 * Task:
 *   Rename the variables so this file works. Use the names already
 *   listed in the `export` line.
 */

const firstPlace = 'gold';
const userName = 'ada';
const isNew = true;

export { firstPlace, userName, isNew };
