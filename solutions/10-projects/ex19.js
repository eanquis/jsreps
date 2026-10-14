/**
 * Exercise 19 · Bank account
 *
 * A function can return an object whose methods share private variables.
 * Only those methods can change them: nobody else can touch the balance.
 *
 * Task:
 *   `createAccount(initialBalance)` returns an object with these methods:
 *   - `deposit(amount)`: adds money to the balance.
 *   - `withdraw(amount)`: takes money from the balance.
 *   - `balance()`: returns the current balance.
 *   - `history()`: returns an array with every successful operation, in order,
 *     like { type: 'deposit', amount: 50 } or { type: 'withdraw', amount: 20 }.
 *   Rules:
 *   - `initialBalance` is optional and defaults to 0.
 *   - deposit and withdraw throw an Error with the message
 *     "Amount must be positive" when the amount is 0 or less.
 *   - withdraw throws an Error with the message "Insufficient funds" when
 *     the amount is bigger than the balance.
 *   - Changing the array returned by history() must not change the account.
 */

function checkAmount(amount) {
  if (amount <= 0) {
    throw new Error('Amount must be positive');
  }
}

export function createAccount(initialBalance = 0) {
  let balance = initialBalance;
  const operations = [];

  return {
    deposit(amount) {
      checkAmount(amount);
      balance += amount;
      operations.push({ type: 'deposit', amount });
    },
    withdraw(amount) {
      checkAmount(amount);
      if (amount > balance) {
        throw new Error('Insufficient funds');
      }
      balance -= amount;
      operations.push({ type: 'withdraw', amount });
    },
    balance() {
      return balance;
    },
    history() {
      return operations.map((operation) => ({ ...operation }));
    },
  };
}
