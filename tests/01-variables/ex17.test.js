import { test } from 'node:test';
import assert from 'node:assert/strict';
import { exercise } from '../helpers.js';

const { load, code } = exercise('01-variables/ex17');

const expected = { answer1: '53', answer2: 2, answer3: 8, answer4: 10 };

test('answers are written by hand', async () => {
  assert.doesNotMatch(await code(), /['"`]5['"`]/, "Write the result, not the expression.");
});

for (const [name, value] of Object.entries(expected)) {
  test(`\`${name}\` is correct`, async () => {
    const answers = await load(name);
    assert.equal(answers[name], value);
  });
}
