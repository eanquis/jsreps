import { test } from 'node:test';
import assert from 'node:assert/strict';
import { assertCalls, exercise } from '../helpers.js';

const { load, code } = exercise('03-loops/ex18');

test('builds the grid', async () => {
  const { timesGrid } = await load('timesGrid');
  assertCalls(timesGrid, [
    [[2], '1 2\n2 4'],
    [[3], '1 2 3\n2 4 6\n3 6 9'],
    [[4], '1 2 3 4\n2 4 6 8\n3 6 9 12\n4 8 12 16'],
  ]);
});

test('a grid of size 1 is just "1"', async () => {
  const { timesGrid } = await load('timesGrid');
  assertCalls(timesGrid, [[[1], '1']]);
});

test('uses two loops', async () => {
  const loops = (await code()).match(/\b(for|while)\s*\(/g) ?? [];
  assert.ok(loops.length >= 2, `Use one loop inside another. Found ${loops.length} loop(s).`);
});
