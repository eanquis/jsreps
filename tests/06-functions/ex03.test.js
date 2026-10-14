import { test } from 'node:test';
import assert from 'node:assert/strict';
import { assertCalls, exercise } from '../helpers.js';

const { load } = exercise('06-functions/ex03');

test('`rectangleArea(width, height)` returns the area', async () => {
  const { rectangleArea } = await load('rectangleArea');
  assertCalls(rectangleArea, [
    [[2, 3], 6],
    [[5, 5], 25],
    [[0, 10], 0],
    [[1.5, 2], 3],
  ]);
});
