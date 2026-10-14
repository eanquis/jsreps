import { test } from 'node:test';
import assert from 'node:assert/strict';
import { assertCalls, exercise } from '../helpers.js';

const { load } = exercise('02-conditionals/ex19');

test('years divisible by 4 are leap years', async () => {
  const { isLeapYear } = await load('isLeapYear');
  assertCalls(isLeapYear, [
    [[2024], true],
    [[1996], true],
  ]);
});

test('other years are not', async () => {
  const { isLeapYear } = await load('isLeapYear');
  assertCalls(isLeapYear, [
    [[2023], false],
    [[2001], false],
  ]);
});

test('years divisible by 100 are not leap years', async () => {
  const { isLeapYear } = await load('isLeapYear');
  assertCalls(isLeapYear, [
    [[1900], false],
    [[2100], false],
  ]);
});

test('years divisible by 400 are leap years after all', async () => {
  const { isLeapYear } = await load('isLeapYear');
  assertCalls(isLeapYear, [
    [[2000], true],
    [[2400], true],
  ]);
});
