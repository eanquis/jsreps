/**
 * Exercise 16 · Fix the bug: out of scope
 *
 * This code crashes because `feeling` only exists inside the `if` block.
 *
 * Task:
 *   Make `feeling` available outside the block. It should start as 'cold'
 *   and become 'hot' inside the `if`. Keep the `if` statement.
 */

const temperature = 30;
let feeling = 'cold';

if (temperature > 25) {
  feeling = 'hot';
}

export { feeling };
