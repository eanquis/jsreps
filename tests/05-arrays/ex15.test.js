import { test } from 'node:test';
import assert from 'node:assert/strict';
import { assertCalls, exercise } from '../helpers.js';

const { load, code } = exercise('05-arrays/ex15');

test('puts the items of b after the items of a', async () => {
  const { merge } = await load('merge');
  assertCalls(merge, [
    [[[1, 2], [3, 4]], [1, 2, 3, 4]],
    [[['x'], ['y', 'z']], ['x', 'y', 'z']],
    [[[], [1]], [1]],
    [[[1], []], [1]],
    [[[], []], []],
  ]);
});

test("doesn't change a or b", async () => {
  const { merge } = await load('merge');
  const a = [1, 2];
  const b = [3, 4];
  const merged = merge(a, b);
  assert.deepEqual(a, [1, 2], '`a` was changed.');
  assert.deepEqual(b, [3, 4], '`b` was changed.');
  assert.notEqual(merged, a, 'Return a new array, not `a` itself.');
});

test('uses spread', async () => {
  const source = await code();
  assert.match(source, /\.\.\.\s*a\b/, 'Spread `a` with ...a');
  assert.match(source, /\.\.\.\s*b\b/, 'Spread `b` with ...b');
});
