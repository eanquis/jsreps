import { test } from 'node:test';
import assert from 'node:assert/strict';
import { assertCalls, exercise } from '../helpers.js';

const { load, code } = exercise('07-objects/ex09');

test('turns each property into "key=value"', async () => {
  const { toQueryParts } = await load('toQueryParts');
  assertCalls(toQueryParts, [
    [[{ size: 'M', color: 'red' }], ['size=M', 'color=red']],
    [[{ page: 2 }], ['page=2']],
    [[{}], []],
  ]);
});

test('uses Object.entries with for...of', async () => {
  const source = await code();
  assert.match(source, /Object\.entries\(/, 'Use Object.entries.');
  assert.match(source, /for\s*\([^)]*\bof\b/, 'Use a for...of loop.');
  assert.doesNotMatch(source, /\.map\(/, "Use a loop instead of map: that's for a later module.");
});
