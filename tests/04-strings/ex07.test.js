import { test } from 'node:test';
import assert from 'node:assert/strict';
import { assertCalls, exercise } from '../helpers.js';

const { load, code } = exercise('04-strings/ex07');

test('names starting with a dot are hidden', async () => {
  const { describeFile } = await load('describeFile');
  assertCalls(describeFile, [
    [['.gitignore'], 'hidden'],
    [['.eslintrc.js'], 'hidden'],
  ]);
});

test('.js and .md files are recognized', async () => {
  const { describeFile } = await load('describeFile');
  assertCalls(describeFile, [
    [['app.js'], 'javascript'],
    [['README.md'], 'markdown'],
  ]);
});

test('anything else is other', async () => {
  const { describeFile } = await load('describeFile');
  assertCalls(describeFile, [
    [['photo.png'], 'other'],
    [['notes.md.txt'], 'other'],
    [['js'], 'other'],
  ]);
});

test('uses .startsWith() and .endsWith()', async () => {
  const source = await code();
  assert.match(source, /\.startsWith\(/, 'Use .startsWith().');
  assert.match(source, /\.endsWith\(/, 'Use .endsWith().');
});
