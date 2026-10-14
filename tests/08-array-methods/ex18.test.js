import { test } from 'node:test';
import assert from 'node:assert/strict';
import { assertCalls, exercise } from '../helpers.js';

const { load, code } = exercise('08-array-methods/ex18');

test('returns the tags of all posts, in order', async () => {
  const { allTags } = await load('allTags');
  const posts = [
    { title: 'Hello', tags: ['news', 'js'] },
    { title: 'Arrays', tags: ['js'] },
    { title: 'Empty', tags: [] },
    { title: 'Styles', tags: ['css', 'design'] },
  ];
  assertCalls(allTags, [
    [[posts], ['news', 'js', 'js', 'css', 'design']],
    [[[]], []],
  ]);
});

test('uses flat or flatMap', async () => {
  assert.match(await code(), /\.(flat|flatMap)\s*\(/, 'Use .flat() or .flatMap().');
});

test('uses no loops', async () => {
  assert.doesNotMatch(await code(), /\b(for|while)\s*\(/, 'Use array methods instead of for/while loops.');
});
