import { test } from 'node:test';
import assert from 'node:assert/strict';
import { assertCalls, exercise } from '../helpers.js';

const { load } = exercise('04-strings/ex10');

test('the first letter becomes uppercase', async () => {
  const { capitalize } = await load('capitalize');
  assertCalls(capitalize, [
    [['hello'], 'Hello'],
    [['javaScript'], 'JavaScript'],
    [['a'], 'A'],
  ]);
});

test('words already capitalized stay the same', async () => {
  const { capitalize } = await load('capitalize');
  assertCalls(capitalize, [[['Already'], 'Already']]);
});
