import { test } from 'node:test';
import assert from 'node:assert/strict';
import { assertCalls, exercise } from '../helpers.js';

const { load, code } = exercise('08-array-methods/ex20');

const students = [
  { name: 'Ada', grades: [9, 8, 10] },
  { name: 'Bob', grades: [5, 6, 7] },
  { name: 'Cleo', grades: [10, 10, 10] },
  { name: 'Dan', grades: [8, 8] },
  { name: 'Eve', grades: [7, 9] },
];

test('lists students with an average of 8 or more, best first', async () => {
  const { honorRoll } = await load('honorRoll');
  assertCalls(honorRoll, [
    [[students], ['Cleo', 'Ada', 'Dan', 'Eve']],
    [[[students[1]]], []],
    [[[]], []],
  ]);
});

test("doesn't change the original array", async () => {
  const { honorRoll } = await load('honorRoll');
  const copy = structuredClone(students);
  honorRoll(students);
  assert.deepEqual(students, copy, 'honorRoll changed the original array.');
});

test('uses no loops', async () => {
  assert.doesNotMatch(await code(), /\b(for|while)\s*\(/, 'Use array methods instead of for/while loops.');
});
