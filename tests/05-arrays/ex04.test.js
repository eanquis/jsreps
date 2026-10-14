import { test } from 'node:test';
import assert from 'node:assert/strict';
import { exercise } from '../helpers.js';

const { load, code } = exercise('05-arrays/ex04');

test('`lastRemoved` is the song removed from the end', async () => {
  const { lastRemoved } = await load('lastRemoved');
  assert.equal(lastRemoved, 'Chorus');
});

test('`firstRemoved` is the song removed from the start', async () => {
  const { firstRemoved } = await load('firstRemoved');
  assert.equal(firstRemoved, 'Warm-up');
});

test('`playlist` ends up with the right songs', async () => {
  const { playlist } = await load('playlist');
  assert.deepEqual(playlist, ['Intro', 'Verse']);
});

test('uses push, unshift, pop and shift', async () => {
  const source = await code();
  for (const method of ['push', 'unshift', 'pop', 'shift']) {
    assert.match(source, new RegExp(`playlist\\.${method}\\(`), `Use playlist.${method}().`);
  }
});
