import { test } from 'node:test';
import assert from 'node:assert/strict';
import { assertCalls, exercise } from '../helpers.js';

const { load } = exercise('08-array-methods/ex17');

test('turns each word into a tag object', async () => {
  const { toTags } = await load('toTags');
  assertCalls(toTags, [
    [[['js', 'css']], [{ label: 'js' }, { label: 'css' }]],
    [[['html']], [{ label: 'html' }]],
    [[[]], []],
  ]);
});
