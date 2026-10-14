/**
 * Exercise 10 · Roman numerals
 *
 * Roman numerals use letters for values:
 *   I = 1, V = 5, X = 10, L = 50, C = 100, D = 500, M = 1000
 * Letters are written from the largest to the smallest and added up:
 * XVI = 10 + 5 + 1 = 16. But a smaller letter before a bigger one is
 * subtracted: IV = 4, IX = 9, XL = 40, XC = 90, CD = 400, CM = 900.
 *
 * Task:
 *   1. `toRoman(n)`: convert a number from 1 to 3999 to a Roman numeral.
 *      toRoman(1994) → 'MCMXCIV'
 *   2. `fromRoman(roman)`: convert a valid Roman numeral back to a number.
 *      fromRoman('MCMXCIV') → 1994
 */

const NUMERALS = [
  ['M', 1000],
  ['CM', 900],
  ['D', 500],
  ['CD', 400],
  ['C', 100],
  ['XC', 90],
  ['L', 50],
  ['XL', 40],
  ['X', 10],
  ['IX', 9],
  ['V', 5],
  ['IV', 4],
  ['I', 1],
];

const VALUES = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };

export function toRoman(n) {
  let result = '';
  let rest = n;
  for (const [letters, value] of NUMERALS) {
    while (rest >= value) {
      result += letters;
      rest -= value;
    }
  }
  return result;
}

export function fromRoman(roman) {
  let total = 0;
  for (let i = 0; i < roman.length; i++) {
    const value = VALUES[roman[i]];
    const next = VALUES[roman[i + 1]] ?? 0;
    total += value < next ? -value : value;
  }
  return total;
}
