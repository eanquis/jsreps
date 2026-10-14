import { test } from 'node:test';
import assert from 'node:assert/strict';
import { assertCalls, exercise } from '../helpers.js';

const { load, code } = exercise('03-loops/ex15');

test('draws rectangles', async () => {
  const { rectangle } = await load('rectangle');
  assertCalls(rectangle, [
    [[3, 2], '***\n***'],
    [[4, 3], '****\n****\n****'],
    [[1, 4], '*\n*\n*\n*'],
    [[5, 1], '*****'],
  ]);
});

test('a 1 by 1 rectangle is a single star', async () => {
  const { rectangle } = await load('rectangle');
  assertCalls(rectangle, [[[1, 1], '*']]);
});

test('uses two loops', async () => {
  const loops = (await code()).match(/\b(for|while)\s*\(/g) ?? [];
  assert.ok(loops.length >= 2, `Use one loop inside another. Found ${loops.length} loop(s).`);
});
