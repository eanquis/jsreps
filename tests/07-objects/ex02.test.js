import { test } from 'node:test';
import assert from 'node:assert/strict';
import { assertCalls, exercise } from '../helpers.js';

const { load, code } = exercise('07-objects/ex02');

test('describes a book', async () => {
  const { describeBook } = await load('describeBook');
  assertCalls(describeBook, [
    [[{ title: 'Dune', author: 'Frank Herbert', pages: 412 }], 'Dune by Frank Herbert (412 pages)'],
    [[{ title: 'Emma', author: 'Jane Austen', pages: 474 }], 'Emma by Jane Austen (474 pages)'],
  ]);
});

test('reads the properties with dot notation', async () => {
  const source = await code();
  for (const property of ['title', 'author', 'pages']) {
    assert.match(source, new RegExp(`\\.${property}\\b`), `Read \`${property}\` with a dot.`);
  }
});
