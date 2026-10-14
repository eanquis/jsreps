import { test } from 'node:test';
import assert from 'node:assert/strict';
import { exercise } from '../helpers.js';

const { load, code } = exercise('01-variables/ex07');

test('`lives` is one less', async () => {
  const { lives } = await load('lives');
  assert.equal(lives, 2);
});

test('`level` is two more', async () => {
  const { level } = await load('level');
  assert.equal(level, 3);
});

test('uses -- and ++', async () => {
  const source = await code();
  assert.match(source, /lives--|--lives/, 'Decrease `lives` with --.');
  const increments = source.match(/level\+\+|\+\+level/g) ?? [];
  assert.equal(increments.length, 2, `Use ++ on \`level\` twice. Found ${increments.length}.`);
});
