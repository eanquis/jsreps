import { test } from 'node:test';
import assert from 'node:assert/strict';
import { fileURLToPath } from 'node:url';
import { loadHints } from './hints.js';

const root = fileURLToPath(new URL('__fixtures__/project/', import.meta.url));

test('loads the hints of an exercise', async () => {
  const hints = await loadHints(root, { module: '01-basics', name: 'ex01' });
  assert.deepEqual(hints, ['First hint.', 'Second hint.']);
});

test('returns no hints for an exercise missing from the hints file', async () => {
  assert.deepEqual(await loadHints(root, { module: '01-basics', name: 'ex02' }), []);
});

test('returns no hints when the module has no hints file', async () => {
  assert.deepEqual(await loadHints(root, { module: '02-more', name: 'ex01' }), []);
});
