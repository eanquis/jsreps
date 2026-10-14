import { test } from 'node:test';
import assert from 'node:assert/strict';
import { assertCalls, exercise } from '../helpers.js';

const { load } = exercise('06-functions/ex14');

const addThree = (n) => n + 3;
const double = (n) => n * 2;
const exclaim = (text) => `${text}!`;

test('applies the function twice', async () => {
  const { applyTwice } = await load('applyTwice');
  assertCalls(applyTwice, [
    [[addThree, 1], 7],
    [[double, 5], 20],
    [[exclaim, 'hi'], 'hi!!'],
  ]);
});

test('calls the function exactly twice', async () => {
  const { applyTwice } = await load('applyTwice');
  let calls = 0;
  applyTwice((n) => {
    calls++;
    return n;
  }, 0);
  assert.equal(calls, 2, `The function was called ${calls} time(s).`);
});
