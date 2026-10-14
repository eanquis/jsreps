import { test } from 'node:test';
import assert from 'node:assert/strict';
import { exercise } from '../helpers.js';

const { load, code } = exercise('01-variables/ex16');

test('`feeling` is "hot"', async () => {
  const { feeling } = await load('feeling');
  assert.equal(feeling, 'hot');
});

test('`feeling` starts as "cold"', async () => {
  assert.match(await code(), /let\s+feeling\s*=\s*['"`]cold['"`]/);
});

test('`feeling` becomes "hot" inside the if', async () => {
  const pattern = /if\s*\(\s*temperature\s*>\s*25\s*\)\s*\{\s*feeling\s*=\s*['"`]hot['"`]/;
  assert.match(await code(), pattern, 'Keep the `if` and reassign `feeling` inside it, without `let`.');
});
