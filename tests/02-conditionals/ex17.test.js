import { test } from 'node:test';
import assert from 'node:assert/strict';
import { assertCalls, exercise } from '../helpers.js';

const { load } = exercise('02-conditionals/ex17');

test('children under 6 enter for free', async () => {
  const { ticketPrice } = await load('ticketPrice');
  assertCalls(ticketPrice, [
    [[0, false], 0],
    [[5, false], 0],
    [[5, true], 0],
  ]);
});

test('seniors pay 5, even if they are students', async () => {
  const { ticketPrice } = await load('ticketPrice');
  assertCalls(ticketPrice, [
    [[65, false], 5],
    [[80, false], 5],
    [[70, true], 5],
  ]);
});

test('students pay 8', async () => {
  const { ticketPrice } = await load('ticketPrice');
  assertCalls(ticketPrice, [
    [[6, true], 8],
    [[20, true], 8],
    [[64, true], 8],
  ]);
});

test('everyone else pays 12', async () => {
  const { ticketPrice } = await load('ticketPrice');
  assertCalls(ticketPrice, [
    [[6, false], 12],
    [[30, false], 12],
    [[64, false], 12],
  ]);
});
