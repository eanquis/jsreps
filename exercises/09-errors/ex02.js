/**
 * Exercise 02 · Throwing an error
 *
 * `throw new Error('message')` stops the function right away and reports
 * the problem to whoever called it.
 *
 * Task:
 *   Return the balance after withdrawing `amount`.
 *   When `amount` is greater than `balance`, throw an Error with the message
 *   "Insufficient funds" instead.
 */

export function withdraw(balance, amount) {
  return balance - amount;
}
