import { test } from 'node:test';
import assert from 'node:assert/strict';
import { assertCalls, exercise } from '../helpers.js';

const { load } = exercise('04-strings/ex18');

test('returns the initials followed by dots', async () => {
  const { initials } = await load('initials');
  assertCalls(initials, [
    [['Ada Lovelace'], 'A.L.'],
    [['Alan Turing'], 'A.T.'],
    [['Cher'], 'C.'],
  ]);
});

test('initials are always uppercase', async () => {
  const { initials } = await load('initials');
  assertCalls(initials, [
    [['grace brewster hopper'], 'G.B.H.'],
    [['linus Torvalds'], 'L.T.'],
  ]);
});
