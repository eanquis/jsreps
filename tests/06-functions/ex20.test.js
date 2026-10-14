import { test } from 'node:test';
import assert from 'node:assert/strict';
import { exercise } from '../helpers.js';

const { load } = exercise('06-functions/ex20');

const addOne = (n) => n + 1;
const double = (n) => n * 2;

test('`pipeline(...fns)` returns a function', async () => {
  const { pipeline } = await load('pipeline');
  assert.equal(typeof pipeline(addOne), 'function', 'pipeline(...) should return a function.');
});

test('passes the value through every function, in order', async () => {
  const { pipeline } = await load('pipeline');
  assert.equal(pipeline(addOne, double)(3), 8, 'pipeline(addOne, double)(3) should return 8.');
  assert.equal(pipeline(double, addOne)(3), 7, 'pipeline(double, addOne)(3) should return 7.');
  assert.equal(pipeline(addOne, addOne, addOne)(0), 3, 'pipeline(addOne, addOne, addOne)(0) should return 3.');
  const shout = pipeline(
    (text) => text.trim(),
    (text) => text.toUpperCase(),
    (text) => `${text}!`,
  );
  assert.equal(shout('  hey '), 'HEY!', "Text pipelines should work too: expected 'HEY!'.");
});

test('with a single function, just applies it', async () => {
  const { pipeline } = await load('pipeline');
  assert.equal(pipeline(double)(21), 42, 'pipeline(double)(21) should return 42.');
});

test('with no functions, returns the value unchanged', async () => {
  const { pipeline } = await load('pipeline');
  assert.equal(pipeline()(5), 5, 'pipeline()(5) should return 5.');
});
