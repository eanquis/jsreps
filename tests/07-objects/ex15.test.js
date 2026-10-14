import { test } from 'node:test';
import assert from 'node:assert/strict';
import { exercise } from '../helpers.js';

const { load, code } = exercise('07-objects/ex15');

async function freshPlayer() {
  const { player } = await load('player');
  player.name = 'Ada';
  player.score = 0;
  return player;
}

test('addPoints adds to the score and returns it', async () => {
  const player = await freshPlayer();
  assert.equal(typeof player.addPoints, 'function', 'Add a method called addPoints.');
  assert.equal(player.addPoints(10), 10, 'player.addPoints(10) should return 10.');
  assert.equal(player.addPoints(5), 15, 'Then player.addPoints(5) should return 15.');
  assert.equal(player.score, 15, 'The score property should be 15 now.');
});

test('describe tells the name and the score', async () => {
  const player = await freshPlayer();
  assert.equal(typeof player.describe, 'function', 'Add a method called describe.');
  player.score = 15;
  assert.equal(player.describe(), 'Ada has 15 points');
});

test('the methods use the current name and score', async () => {
  const player = await freshPlayer();
  player.name = 'Grace';
  player.score = 3;
  assert.equal(player.describe(), 'Grace has 3 points', 'Read the name and score with this.');
});

test('uses this', async () => {
  assert.match(await code(), /\bthis\./);
});
