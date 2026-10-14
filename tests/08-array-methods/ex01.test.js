import { test } from 'node:test';
import assert from 'node:assert/strict';
import { exercise } from '../helpers.js';

const { load, code } = exercise('08-array-methods/ex01');

const expected = {
  answer1: [2, 4, 6],
  answer2: [3, 4],
  answer3: [],
  answer4: [false, true, true],
  answer5: ['aa', 'bb'],
};

test('answers are written by hand', async () => {
  assert.doesNotMatch(await code(), /\.(map|filter)\s*\(/, 'Predict the answers instead of calling map or filter.');
});

for (const [name, value] of Object.entries(expected)) {
  test(`\`${name}\` is correct`, async () => {
    const answers = await load(name);
    assert.deepEqual(answers[name], value);
  });
}
