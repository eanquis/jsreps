import { test } from 'node:test';
import assert from 'node:assert/strict';
import { exercise } from '../helpers.js';

const { load, code } = exercise('02-conditionals/ex01');

const expected = { answer1: true, answer2: false, answer3: true, answer4: false, answer5: true };

test('answers are written as true or false', async () => {
  const literals = (await code()).match(/answer\d\s*=\s*(true|false)\s*;/g) ?? [];
  assert.equal(literals.length, 5, 'Write each answer as true or false, without quotes or comparisons.');
});

for (const [name, value] of Object.entries(expected)) {
  test(`\`${name}\` is correct`, async () => {
    const answers = await load(name);
    assert.equal(answers[name], value);
  });
}
