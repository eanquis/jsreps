import { test } from 'node:test';
import assert from 'node:assert/strict';
import { exercise } from '../helpers.js';

const { load, code } = exercise('03-loops/ex11');

const expected = { answer1: 3, answer2: 12, answer3: '012', answer4: 12 };

test('answers are written by hand, without loops', async () => {
  assert.doesNotMatch(await code(), /\b(for|while)\b/, 'Predict the values instead of running the loops.');
});

for (const [name, value] of Object.entries(expected)) {
  test(`\`${name}\` is correct`, async () => {
    const answers = await load(name);
    assert.equal(answers[name], value);
  });
}
