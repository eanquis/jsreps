import { test } from 'node:test';
import assert from 'node:assert/strict';
import { assertCalls, exercise } from '../helpers.js';

const { load } = exercise('09-errors/ex18');

/** A task that fails `failures` times, then returns 'success'. Counts its calls. */
function flakyTask(failures) {
  const task = () => {
    task.calls++;
    if (task.calls <= failures) {
      throw new Error(`Failure ${task.calls}`);
    }
    return 'success';
  };
  task.calls = 0;
  return task;
}

test('returns the result of the first call that works', async () => {
  const { retry } = await load('retry');
  const task = flakyTask(0);
  assert.equal(retry(task, 3), 'success');
  assert.equal(task.calls, 1, 'Stop calling the task as soon as it works.');
});

test('tries again after failures', async () => {
  const { retry } = await load('retry');
  const task = flakyTask(2);
  assert.equal(retry(task, 3), 'success', 'The task works on the 3rd attempt.');
  assert.equal(task.calls, 3);
});

test('throws the last error when every attempt fails', async () => {
  const { retry } = await load('retry');
  const task = flakyTask(5);
  assert.throws(() => retry(task, 3), { message: 'Failure 3' },
    'After 3 failed attempts, retry should throw the error from the 3rd one.');
  assert.equal(task.calls, 3, 'Call the task exactly `times` times.');
});
