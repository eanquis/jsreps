import { test } from 'node:test';
import assert from 'node:assert/strict';
import { exercise } from '../helpers.js';

const { load, code } = exercise('05-arrays/ex17');

const expected = { answer1: 4, answer2: 4, answer3: true, answer4: false };

test('answers are written by hand', async () => {
  const literals = (await code()).match(/answer\d\s*=\s*(true|false|-?\d+)\s*;/g) ?? [];
  assert.equal(literals.length, 4, 'Write each answer as a number or as true/false.');
});

for (const [name, value] of Object.entries(expected)) {
  test(`\`${name}\` is correct`, async () => {
    const answers = await load(name);
    assert.equal(answers[name], value);
  });
}
