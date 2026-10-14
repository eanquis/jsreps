import { test } from 'node:test';
import { assertCalls, exercise } from '../helpers.js';

const { load } = exercise('10-projects/ex08');

test('shifts lowercase and uppercase letters', async () => {
  const { caesar } = await load('caesar');
  assertCalls(caesar, [
    [['abc', 1], 'bcd'],
    [['ABC', 2], 'CDE'],
    [['Hello, World!', 3], 'Khoor, Zruog!'],
  ]);
});

test('wraps around the end of the alphabet', async () => {
  const { caesar } = await load('caesar');
  assertCalls(caesar, [
    [['xyz', 3], 'abc'],
    [['XYZ', 3], 'ABC'],
    [['abc', 27], 'bcd'],
  ]);
});

test('shifts backwards with negative shifts', async () => {
  const { caesar } = await load('caesar');
  assertCalls(caesar, [
    [['Khoor, Zruog!', -3], 'Hello, World!'],
    [['abc', -1], 'zab'],
    [['abc', -27], 'zab'],
  ]);
});

test('keeps everything that is not a letter', async () => {
  const { caesar } = await load('caesar');
  assertCalls(caesar, [
    [['123 !?', 5], '123 !?'],
    [['', 5], ''],
  ]);
});
