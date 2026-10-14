import { test } from 'node:test';
import assert from 'node:assert/strict';
import { assertCalls, exercise } from '../helpers.js';

const { load, code } = exercise('03-loops/ex16');

test('draws triangles', async () => {
  const { triangle } = await load('triangle');
  assertCalls(triangle, [
    [[3], '*\n**\n***'],
    [[2], '*\n**'],
    [[5], '*\n**\n***\n****\n*****'],
  ]);
});

test('a triangle of height 1 is a single star', async () => {
  const { triangle } = await load('triangle');
  assertCalls(triangle, [[[1], '*']]);
});

test('uses two loops', async () => {
  const loops = (await code()).match(/\b(for|while)\s*\(/g) ?? [];
  assert.ok(loops.length >= 2, `Use one loop inside another. Found ${loops.length} loop(s).`);
});
