import { test } from 'node:test';
import assert from 'node:assert/strict';
import { assertCalls, exercise } from '../helpers.js';

const { load } = exercise('10-projects/ex15');

test('ranks players by score, highest first', async () => {
  const { leaderboard } = await load('leaderboard');
  const players = [
    { name: 'Ada', score: 30 },
    { name: 'Grace', score: 50 },
    { name: 'Linus', score: 10 },
  ];
  assertCalls(leaderboard, [[[players], ['1. Grace (50)', '2. Ada (30)', '3. Linus (10)']]]);
});

test('breaks ties alphabetically', async () => {
  const { leaderboard } = await load('leaderboard');
  const players = [
    { name: 'Zoe', score: 20 },
    { name: 'Bob', score: 20 },
    { name: 'Ann', score: 5 },
    { name: 'Cid', score: 20 },
  ];
  assertCalls(leaderboard, [
    [[players], ['1. Bob (20)', '2. Cid (20)', '3. Zoe (20)', '4. Ann (5)']],
  ]);
});

test('an empty list has an empty leaderboard', async () => {
  const { leaderboard } = await load('leaderboard');
  assertCalls(leaderboard, [[[[]], []]]);
});

test("doesn't change the array it receives", async () => {
  const { leaderboard } = await load('leaderboard');
  const players = [
    { name: 'Ada', score: 1 },
    { name: 'Bob', score: 2 },
  ];
  leaderboard(players);
  assert.deepEqual(players.map((player) => player.name), ['Ada', 'Bob'], 'Sort a copy, not the original array.');
});
