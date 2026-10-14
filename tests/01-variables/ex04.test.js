import { test } from 'node:test';
import assert from 'node:assert/strict';
import { exercise } from '../helpers.js';

const { load, code } = exercise('01-variables/ex04');

test('`score` ends up as 15', async () => {
  const { score } = await load('score');
  assert.equal(score, 15);
});

test('`score` starts at 10 and is reassigned later', async () => {
  const source = await code();
  assert.match(source, /let\s+score\s*=\s*10\b/, 'Declare `score` starting at 10.');
  assert.match(source, /^\s*score\s*=\s*15\s*;/m, 'Keep the line `score = 15;`.');
});
