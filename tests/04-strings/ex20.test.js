import { test } from 'node:test';
import assert from 'node:assert/strict';
import { assertCalls, exercise } from '../helpers.js';

const { load } = exercise('04-strings/ex20');

test('compresses groups of repeated characters', async () => {
  const { compress } = await load('compress');
  assertCalls(compress, [
    [['aaabccdddd'], 'a3b1c2d4'],
    [['zzzzz'], 'z5'],
    [['aabbaa'], 'a2b2a2'],
  ]);
});

test('characters that appear once get a 1', async () => {
  const { compress } = await load('compress');
  assertCalls(compress, [
    [['abc'], 'a1b1c1'],
    [['x'], 'x1'],
  ]);
});

test('an empty text stays empty', async () => {
  const { compress } = await load('compress');
  assertCalls(compress, [[[''], '']]);
});
