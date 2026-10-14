import { test } from 'node:test';
import assert from 'node:assert/strict';
import { assertCalls, exercise } from '../helpers.js';

const { load, code } = exercise('02-conditionals/ex08');

test('Saturday and Sunday are the weekend', async () => {
  const { isWeekend } = await load('isWeekend');
  assertCalls(isWeekend, [
    [['Saturday'], true],
    [['Sunday'], true],
  ]);
});

test('other days are not', async () => {
  const { isWeekend } = await load('isWeekend');
  assertCalls(isWeekend, [
    [['Monday'], false],
    [['Friday'], false],
    [['saturday'], false],
    [[''], false],
  ]);
});

test('uses ||', async () => {
  assert.match(await code(), /\|\|/);
});
