import { test } from 'node:test';
import assert from 'node:assert/strict';
import { exercise } from '../helpers.js';

const { load } = exercise('07-objects/ex01');

test('`book` is an object', async () => {
  const { book } = await load('book');
  assert.equal(typeof book, 'object', 'Create an object with { }.');
  assert.notEqual(book, null, 'Create an object with { }.');
});

test('`book` has the title, the author and the number of pages', async () => {
  const { book } = await load('book');
  assert.deepEqual(book, { title: 'Dune', author: 'Frank Herbert', pages: 412 });
});
