import { test } from 'node:test';
import assert from 'node:assert/strict';
import { assertCalls, exercise } from '../helpers.js';

const { load, code } = exercise('03-loops/ex12');

test('repeats the word with spaces in between', async () => {
  const { chant } = await load('chant');
  assertCalls(chant, [
    [['go', 3], 'go! go! go!'],
    [['hey', 2], 'hey! hey!'],
    [['olé', 4], 'olé! olé! olé! olé!'],
  ]);
});

test('one repetition has no extra spaces', async () => {
  const { chant } = await load('chant');
  assertCalls(chant, [[['hey', 1], 'hey!']]);
});

test('zero repetitions is an empty string', async () => {
  const { chant } = await load('chant');
  assertCalls(chant, [[['go', 0], '']]);
});

test('uses a loop, without .repeat()', async () => {
  const source = await code();
  assert.match(source, /\b(for|while)\s*\(/, 'Use a loop.');
  assert.doesNotMatch(source, /\.repeat\b/, "Don't use .repeat().");
});
