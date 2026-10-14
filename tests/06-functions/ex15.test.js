import { test } from 'node:test';
import assert from 'node:assert/strict';
import { exercise } from '../helpers.js';

const { load } = exercise('06-functions/ex15');

test('`makeCounter()` returns a function', async () => {
  const { makeCounter } = await load('makeCounter');
  assert.equal(typeof makeCounter(), 'function', 'makeCounter() should return a function.');
});

test('a counter counts 1, 2, 3...', async () => {
  const { makeCounter } = await load('makeCounter');
  const counter = makeCounter();
  assert.equal(counter(), 1, 'The first call should return 1.');
  assert.equal(counter(), 2, 'The second call should return 2.');
  assert.equal(counter(), 3, 'The third call should return 3.');
});

test('each counter counts on its own', async () => {
  const { makeCounter } = await load('makeCounter');
  const first = makeCounter();
  const second = makeCounter();
  first();
  first();
  assert.equal(second(), 1, 'A new counter should start at 1, even if another counter was used.');
  assert.equal(first(), 3, 'Using another counter should not change this one.');
});
