import { test } from 'node:test';
import { assertCalls, exercise } from '../helpers.js';

const { load } = exercise('10-projects/ex09');

test('encode compresses repeated characters', async () => {
  const { encode } = await load('encode');
  assertCalls(encode, [
    [['aaabcc'], '3a1b2c'],
    [['abc'], '1a1b1c'],
    [['zzzzzzzzzzzz'], '12z'],
    [['aabaa'], '2a1b2a'],
    [[''], ''],
  ]);
});

test('decode restores the original text', async () => {
  const { decode } = await load('decode');
  assertCalls(decode, [
    [['3a1b2c'], 'aaabcc'],
    [['1a1b1c'], 'abc'],
    [['12x1y'], 'xxxxxxxxxxxxy'],
    [[''], ''],
  ]);
});
