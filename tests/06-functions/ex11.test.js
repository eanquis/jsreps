import { test } from 'node:test';
import assert from 'node:assert/strict';
import { exercise } from '../helpers.js';

const { load, code } = exercise('06-functions/ex11');

const expected = { answer1: 11, answer2: 2, answer3: 2 };

test('answers are written as numbers', async () => {
  const literals = (await code()).match(/answer\d\s*=\s*-?\d+\s*;/g) ?? [];
  assert.equal(literals.length, 3, 'Write each answer as a number, without quotes.');
});

for (const [name, value] of Object.entries(expected)) {
  test(`\`${name}\` is correct`, async () => {
    const answers = await load(name);
    assert.equal(answers[name], value);
  });
}
