import { test } from 'node:test';
import assert from 'node:assert/strict';
import { assertCalls, exercise } from '../helpers.js';

const { load, code } = exercise('04-strings/ex11');

test('turns titles into slugs', async () => {
  const { slugify } = await load('slugify');
  assertCalls(slugify, [
    [['Hello World'], 'hello-world'],
    [['Learn JavaScript By Practicing'], 'learn-javascript-by-practicing'],
    [['jsreps'], 'jsreps'],
  ]);
});

test('uses .replaceAll()', async () => {
  assert.match(await code(), /\.replaceAll\(/);
});
