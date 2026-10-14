/**
 * Exercise 04 · Adding, changing and removing
 *
 * Objects can change after they are created:
 *   car.color = 'red';  // adds or changes a property
 *   delete car.color;   // removes it
 *
 * Task:
 *   Change `account` before returning it:
 *   1. Add the property `isActive` with the value true.
 *   2. Change `balance` to 100.
 *   3. Remove the `password` property with `delete`.
 */

export function buildAccount(name) {
  const account = { name: name, password: 'secret', balance: 0 };

  account.isActive = true;
  account.balance = 100;
  delete account.password;

  return account;
}
