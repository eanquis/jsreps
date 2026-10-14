import { test } from 'node:test';
import assert from 'node:assert/strict';
import { assertCalls, exercise } from '../helpers.js';

const { load, code } = exercise('02-conditionals/ex15');

test('Monday to Friday are weekdays', async () => {
  const { dayType } = await load('dayType');
  assertCalls(dayType, [
    [['Monday'], 'weekday'],
    [['Tuesday'], 'weekday'],
    [['Wednesday'], 'weekday'],
    [['Thursday'], 'weekday'],
    [['Friday'], 'weekday'],
  ]);
});

test('Saturday and Sunday are the weekend', async () => {
  const { dayType } = await load('dayType');
  assertCalls(dayType, [
    [['Saturday'], 'weekend'],
    [['Sunday'], 'weekend'],
  ]);
});

test('anything else is invalid', async () => {
  const { dayType } = await load('dayType');
  assertCalls(dayType, [
    [['Funday'], 'invalid'],
    [['monday'], 'invalid'],
    [[''], 'invalid'],
  ]);
});

test('uses switch', async () => {
  assert.match(await code(), /\bswitch\s*\(/);
});
