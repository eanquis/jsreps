import { test } from 'node:test';
import assert from 'node:assert/strict';
import { exercise } from '../helpers.js';

const { load, code } = exercise('04-strings/ex17');

const expected = { answer1: 'ada', answer2: 2, answer3: 2, answer4: 'bonana', answer5: 'Java' };

test('answers are written by hand', async () => {
  assert.doesNotMatch(await code(), /\.\w+\s*\(/, 'Write the results, without calling methods.');
});

for (const [name, value] of Object.entries(expected)) {
  test(`\`${name}\` is correct`, async () => {
    const answers = await load(name);
    assert.equal(answers[name], value);
  });
}
