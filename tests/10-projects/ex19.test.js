import { test } from 'node:test';
import assert from 'node:assert/strict';
import { assertCalls, exercise } from '../helpers.js';

const { load } = exercise('10-projects/ex19');

async function newAccount(...args) {
  const { createAccount } = await load('createAccount');
  const account = createAccount(...args);
  assert.equal(typeof account, 'object', 'createAccount should return an object.');
  return account;
}

test('starts with the initial balance, or 0', async () => {
  assert.equal((await newAccount(100)).balance(), 100);
  assert.equal((await newAccount()).balance(), 0);
});

test('deposits and withdrawals change the balance', async () => {
  const account = await newAccount(10);
  account.deposit(50);
  assert.equal(account.balance(), 60, 'After depositing 50 into 10, the balance should be 60.');
  account.withdraw(25);
  assert.equal(account.balance(), 35, 'After withdrawing 25 from 60, the balance should be 35.');
  account.withdraw(35);
  assert.equal(account.balance(), 0, 'Withdrawing the whole balance is allowed.');
});

test('rejects amounts that are not positive', async () => {
  const account = await newAccount(100);
  for (const amount of [0, -10]) {
    assert.throws(() => account.deposit(amount), { message: 'Amount must be positive' });
    assert.throws(() => account.withdraw(amount), { message: 'Amount must be positive' });
  }
  assert.equal(account.balance(), 100, 'Failed operations must not change the balance.');
});

test("can't withdraw more than the balance", async () => {
  const account = await newAccount(30);
  assert.throws(() => account.withdraw(31), { message: 'Insufficient funds' });
  assert.equal(account.balance(), 30, 'Failed operations must not change the balance.');
});

test('keeps a history of successful operations', async () => {
  const account = await newAccount();
  assert.deepEqual(account.history(), [], 'A new account has no history.');
  account.deposit(50);
  account.withdraw(20);
  assert.throws(() => account.withdraw(1000));
  account.deposit(5);
  assert.deepEqual(account.history(), [
    { type: 'deposit', amount: 50 },
    { type: 'withdraw', amount: 20 },
    { type: 'deposit', amount: 5 },
  ]);
});

test('the history from outside cannot change the account', async () => {
  const account = await newAccount();
  account.deposit(10);
  const history = account.history();
  history.push({ type: 'deposit', amount: 999 });
  history[0].amount = 999;
  assert.deepEqual(account.history(), [{ type: 'deposit', amount: 10 }], 'Return a copy of the history.');
});

test('accounts are independent', async () => {
  const first = await newAccount(10);
  const second = await newAccount(10);
  first.deposit(5);
  assert.equal(second.balance(), 10, 'Each account needs its own balance.');
});
