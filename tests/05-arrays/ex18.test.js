import { test } from 'node:test';
import assert from 'node:assert/strict';
import { assertCalls, exercise } from '../helpers.js';

const { load, code } = exercise('05-arrays/ex18');

test('adds every number in the grid', async () => {
  const { sumGrid } = await load('sumGrid');
  assertCalls(sumGrid, [
    [[[[1, 2], [3, 4]]], 10],
    [[[[1, 2, 3], [4, 5, 6], [7, 8, 9]]], 45],
    [[[[5]]], 5],
    [[[[1], [2, 3], [4, 5, 6]]], 21],
  ]);
});

test('empty grids sum to 0', async () => {
  const { sumGrid } = await load('sumGrid');
  assertCalls(sumGrid, [
    [[[]], 0],
    [[[[], []]], 0],
  ]);
});

test('uses a loop inside a loop', async () => {
  const source = await code();
  const loops = source.match(/\bfor\s*\(/g) ?? [];
  assert.ok(loops.length >= 2, 'Use one loop for the rows and another one for the numbers in each row.');
  assert.doesNotMatch(source, /\.(flat|reduce|forEach)\(/, 'Use loops for this one.');
});
