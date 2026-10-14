/**
 * Exercise 15 · Predict: block scope
 *
 * Variables declared with `let` or `const` only exist inside the { block }
 * where they were declared.
 *
 * Task:
 *   Without running the code, write the value of `message` after the block.
 *   Write your answer as a string, don't reference `message`.
 */

let message = 'outside';

{
  let message = 'inside';
}

export const answer = 'outside';
