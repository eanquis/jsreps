import { test } from 'node:test';
import assert from 'node:assert/strict';
import { exercise } from '../helpers.js';

const { load } = exercise('01-variables/ex02');

test('`daysInWeek` is a number', async () => {
  const { daysInWeek } = await load('daysInWeek');
  assert.equal(typeof daysInWeek, 'number', 'Numbers are written without quotes.');
});

test('`daysInWeek` is the number of days in a week', async () => {
  const { daysInWeek } = await load('daysInWeek');
  assert.equal(daysInWeek, 7);
});
