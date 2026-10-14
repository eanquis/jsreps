import { test } from 'node:test';
import assert from 'node:assert/strict';
import { assertCalls, exercise } from '../helpers.js';

const { load } = exercise('08-array-methods/ex14');

test('returns the three highest scores, highest first', async () => {
  const { topThree } = await load('topThree');
  assertCalls(topThree, [
    [[[50, 90, 70, 100, 60]], [100, 90, 70]],
    [[[1, 2]], [2, 1]],
  ]);
});

test("doesn't change the original array", async () => {
  const { topThree } = await load('topThree');
  const scores = [50, 90, 70, 100, 60];
  topThree(scores);
  assert.deepEqual(
    scores,
    [50, 90, 70, 100, 60],
    'topThree changed the order of the original array.',
  );
});
