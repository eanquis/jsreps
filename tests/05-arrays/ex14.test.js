import { test } from 'node:test';
import assert from 'node:assert/strict';
import { assertCalls, exercise } from '../helpers.js';

const { load, code } = exercise('05-arrays/ex14');

test('turns titles into slugs', async () => {
  const { slugify } = await load('slugify');
  assertCalls(slugify, [
    [['Hello World'], 'hello-world'],
    [['Learn JavaScript Today'], 'learn-javascript-today'],
    [['a b c d'], 'a-b-c-d'],
  ]);
});

test('a single word only becomes lowercase', async () => {
  const { slugify } = await load('slugify');
  assertCalls(slugify, [[['Arrays'], 'arrays']]);
});

test('uses split and join', async () => {
  const source = await code();
  assert.match(source, /\.split\(/, 'Use split().');
  assert.match(source, /\.join\(/, 'Use join().');
  assert.doesNotMatch(source, /\.replace(All)?\(/, "Don't use replace in this exercise.");
});
