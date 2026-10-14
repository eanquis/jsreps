import { test } from 'node:test';
import assert from 'node:assert/strict';
import { assertCalls, exercise } from '../helpers.js';

const { load, code } = exercise('07-objects/ex17');

test("the user's settings replace the defaults", async () => {
  const { mergeSettings } = await load('mergeSettings');
  assertCalls(mergeSettings, [
    [
      [{ theme: 'light', volume: 5, language: 'en' }, { theme: 'dark' }],
      { theme: 'dark', volume: 5, language: 'en' },
    ],
    [
      [{ theme: 'light', volume: 5 }, { volume: 0, captions: true }],
      { theme: 'light', volume: 0, captions: true },
    ],
    [[{ theme: 'light' }, {}], { theme: 'light' }],
  ]);
});

test('returns a new object and keeps the originals', async () => {
  const { mergeSettings } = await load('mergeSettings');
  const defaults = { theme: 'light', volume: 5 };
  const userSettings = { theme: 'dark' };
  const merged = mergeSettings(defaults, userSettings);

  assert.notEqual(merged, defaults, 'Return a new object instead of changing defaults.');
  assert.deepEqual(defaults, { theme: 'light', volume: 5 }, '`defaults` should not change.');
  assert.deepEqual(userSettings, { theme: 'dark' }, '`userSettings` should not change.');
});

test('uses the spread operator', async () => {
  assert.match(await code(), /\.\.\.\s*\w+/);
});
