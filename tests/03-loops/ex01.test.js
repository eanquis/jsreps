import { test } from 'node:test';
import assert from 'node:assert/strict';
import { exercise } from '../helpers.js';

const { load, code } = exercise('03-loops/ex01');

const expected = { answer1: 5, answer2: 5, answer3: 6, answer4: 0, answer5: -2 };

test('answers are written as numbers', async () => {
  const literals = (await code()).match(/answer\d\s*=\s*-?\d+\s*;/g) ?? [];
  assert.equal(literals.length, 5, 'Write each answer as a number, without quotes or loops.');
});

for (const [name, value] of Object.entries(expected)) {
  test(`\`${name}\` is correct`, async () => {
    const answers = await load(name);
    assert.equal(answers[name], value);
  });
}
