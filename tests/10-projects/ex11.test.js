import { test } from 'node:test';
import { assertCalls, exercise } from '../helpers.js';

const { load } = exercise('10-projects/ex11');

test('finds a winner in a row', async () => {
  const { winner } = await load('winner');
  assertCalls(winner, [
    [[[['X', 'X', 'X'], ['O', 'O', ''], ['', '', '']]], 'X'],
    [[[['X', 'X', ''], ['', 'X', ''], ['O', 'O', 'O']]], 'O'],
  ]);
});

test('finds a winner in a column', async () => {
  const { winner } = await load('winner');
  assertCalls(winner, [
    [[[['O', 'X', ''], ['O', 'X', ''], ['O', '', 'X']]], 'O'],
    [[[['O', 'O', 'X'], ['', '', 'X'], ['', '', 'X']]], 'X'],
  ]);
});

test('finds a winner in a diagonal', async () => {
  const { winner } = await load('winner');
  assertCalls(winner, [
    [[[['X', 'O', ''], ['', 'X', 'O'], ['', '', 'X']]], 'X'],
    [[[['X', 'X', 'O'], ['', 'O', ''], ['O', '', 'X']]], 'O'],
  ]);
});

test('a full board without a winner is a draw', async () => {
  const { winner } = await load('winner');
  assertCalls(winner, [[[[['X', 'O', 'X'], ['X', 'O', 'O'], ['O', 'X', 'X']]], 'draw']]);
});

test('returns null while the game is still going', async () => {
  const { winner } = await load('winner');
  assertCalls(winner, [
    [[[['', '', ''], ['', '', ''], ['', '', '']]], null],
    [[[['X', 'O', 'X'], ['', 'O', ''], ['', 'X', '']]], null],
  ]);
});
