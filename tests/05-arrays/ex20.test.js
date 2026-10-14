import { test } from 'node:test';
import assert from 'node:assert/strict';
import { assertCalls, exercise } from '../helpers.js';

const { load } = exercise('05-arrays/ex20');

test('three in a row', async () => {
  const { winner } = await load('winner');
  assertCalls(winner, [
    [[[['X', 'X', 'X'], ['O', 'O', ''], ['', '', '']]], 'X'],
    [[[['X', 'X', ''], ['O', 'O', 'O'], ['X', '', '']]], 'O'],
    [[[['', '', ''], ['O', 'O', ''], ['X', 'X', 'X']]], 'X'],
  ]);
});

test('three in a column', async () => {
  const { winner } = await load('winner');
  assertCalls(winner, [
    [[[['X', 'O', ''], ['X', 'O', ''], ['X', '', '']]], 'X'],
    [[[['X', 'O', ''], ['X', 'O', ''], ['', 'O', 'X']]], 'O'],
    [[[['', 'X', 'O'], ['X', '', 'O'], ['X', '', 'O']]], 'O'],
  ]);
});

test('three in a diagonal', async () => {
  const { winner } = await load('winner');
  assertCalls(winner, [
    [[[['X', 'O', ''], ['O', 'X', ''], ['', '', 'X']]], 'X'],
    [[[['X', 'X', 'O'], ['', 'O', ''], ['O', '', 'X']]], 'O'],
  ]);
});

test('nobody wins', async () => {
  const { winner } = await load('winner');
  assertCalls(winner, [
    [[[['', '', ''], ['', '', ''], ['', '', '']]], null],
    [[[['X', 'O', ''], ['', '', ''], ['', '', '']]], null],
    [[[['X', 'O', 'X'], ['X', 'O', 'O'], ['O', 'X', 'X']]], null],
  ]);
});
