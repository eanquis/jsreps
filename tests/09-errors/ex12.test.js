import { test } from 'node:test';
import assert from 'node:assert/strict';
import { assertCalls, exercise } from '../helpers.js';

const { load, code } = exercise('09-errors/ex12');

test('returns the settings from valid JSON', async () => {
  const { loadSettings } = await load('loadSettings');
  assertCalls(loadSettings, [
    [['{"theme":"dark"}'], { theme: 'dark' }],
    [['{}'], { theme: 'light' }],
  ]);
});

test('falls back to the defaults for invalid JSON', async () => {
  const { loadSettings } = await load('loadSettings');
  assertCalls(loadSettings, [
    [['not json'], { theme: 'light' }],
    [[''], { theme: 'light' }],
  ]);
});

test('lets unexpected errors through', async () => {
  const { loadSettings } = await load('loadSettings');
  assert.throws(
    () => loadSettings('null'),
    { name: 'TypeError' },
    "loadSettings('null') should let the TypeError through: only SyntaxError means invalid JSON.",
  );
});

test('throws unexpected errors again', async () => {
  assert.match(await code(), /\bthrow\s+error\b/, 'Use `throw error;` for errors you can\'t handle.');
});
