import { test } from 'node:test';
import assert from 'node:assert/strict';
import { assertCalls, exercise } from '../helpers.js';

const { load } = exercise('03-loops/ex20');

test('counts the steps to reach 1', async () => {
  const { collatzSteps } = await load('collatzSteps');
  assertCalls(collatzSteps, [
    [[2], 1],
    [[6], 8],
    [[3], 7],
    [[16], 4],
    [[27], 111],
  ]);
});

test('1 is already there', async () => {
  const { collatzSteps } = await load('collatzSteps');
  assertCalls(collatzSteps, [[[1], 0]]);
});
