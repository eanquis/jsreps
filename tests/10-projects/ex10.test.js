import { test } from 'node:test';
import { assertCalls, exercise } from '../helpers.js';

const { load } = exercise('10-projects/ex10');

const pairs = [
  [1, 'I'],
  [3, 'III'],
  [4, 'IV'],
  [9, 'IX'],
  [14, 'XIV'],
  [40, 'XL'],
  [90, 'XC'],
  [400, 'CD'],
  [900, 'CM'],
  [1994, 'MCMXCIV'],
  [2026, 'MMXXVI'],
  [3999, 'MMMCMXCIX'],
];

test('toRoman converts numbers to Roman numerals', async () => {
  const { toRoman } = await load('toRoman');
  assertCalls(
    toRoman,
    pairs.map(([number, roman]) => [[number], roman]),
  );
});

test('fromRoman converts Roman numerals to numbers', async () => {
  const { fromRoman } = await load('fromRoman');
  assertCalls(
    fromRoman,
    pairs.map(([number, roman]) => [[roman], number]),
  );
});
