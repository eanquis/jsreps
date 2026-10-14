import { test } from 'node:test';
import assert from 'node:assert/strict';
import { assertCalls, exercise } from '../helpers.js';

const { load } = exercise('10-projects/ex12');

test('transpose turns rows into columns', async () => {
  const { transpose } = await load('transpose');
  assertCalls(transpose, [
    [[[[1, 2, 3], [4, 5, 6]]], [[1, 4], [2, 5], [3, 6]]],
    [[[[1, 2], [3, 4]]], [[1, 3], [2, 4]]],
    [[[[7]]], [[7]]],
  ]);
});

test('rotate turns the matrix 90° clockwise', async () => {
  const { rotate } = await load('rotate');
  assertCalls(rotate, [
    [[[[1, 2], [3, 4]]], [[3, 1], [4, 2]]],
    [[[[1, 2, 3], [4, 5, 6], [7, 8, 9]]], [[7, 4, 1], [8, 5, 2], [9, 6, 3]]],
    [[[[1, 2, 3], [4, 5, 6]]], [[4, 1], [5, 2], [6, 3]]],
  ]);
});

test("doesn't change the matrix it receives", async () => {
  const { transpose, rotate } = await load('transpose', 'rotate');
  const matrix = [[1, 2], [3, 4]];
  transpose(matrix);
  rotate(matrix);
  assert.deepEqual(matrix, [[1, 2], [3, 4]], 'Create new arrays instead of changing the original.');
});
