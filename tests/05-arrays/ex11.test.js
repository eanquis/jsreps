import { test } from 'node:test';
import assert from 'node:assert/strict';
import { assertCalls, exercise } from '../helpers.js';

const { load } = exercise('05-arrays/ex11');

test('adds 10 to every score', async () => {
  const { withBonus } = await load('withBonus');
  assertCalls(withBonus, [
    [[[50, 70, 90]], [60, 80, 100]],
    [[[0]], [10]],
    [[[]], []],
  ]);
});

test("doesn't change the array it received", async () => {
  const { withBonus } = await load('withBonus');
  const scores = [50, 70, 90];
  withBonus(scores);
  assert.deepEqual(scores, [50, 70, 90], 'The original scores changed. Work on a copy.');
});
