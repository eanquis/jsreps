import { test } from 'node:test';
import assert from 'node:assert/strict';
import { assertCalls, exercise } from '../helpers.js';

const { load } = exercise('08-array-methods/ex15');

const ada = { name: 'Ada', age: 36 };
const grace = { name: 'Grace', age: 85 };
const alan = { name: 'Alan', age: 41 };
const linus = { name: 'Linus', age: 36 };

test('sorts people by age, youngest first', async () => {
  const { sortByAge } = await load('sortByAge');
  assertCalls(sortByAge, [
    [[[grace, ada, alan]], [ada, alan, grace]],
    [[[alan, grace]], [alan, grace]],
    [[[]], []],
  ]);
});

test('people with the same age keep their order', async () => {
  const { sortByAge } = await load('sortByAge');
  assertCalls(sortByAge, [
    [[[grace, linus, ada]], [linus, ada, grace]],
  ]);
});

test("doesn't change the original array", async () => {
  const { sortByAge } = await load('sortByAge');
  const people = [grace, ada, alan];
  sortByAge(people);
  assert.deepEqual(people, [grace, ada, alan], 'sortByAge changed the original array.');
});
