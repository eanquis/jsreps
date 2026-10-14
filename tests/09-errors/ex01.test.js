import { test } from 'node:test';
import assert from 'node:assert/strict';
import { exercise } from '../helpers.js';

const { load, code } = exercise('09-errors/ex01');

const expected = {
  answer1: 'ReferenceError',
  answer2: 'TypeError',
  answer3: 'TypeError',
  answer4: 'RangeError',
  answer5: 'SyntaxError',
};

test('answers are written as strings', async () => {
  const literals = (await code()).match(/answer\d\s*=\s*['"`]\w+['"`]\s*;/g) ?? [];
  assert.equal(literals.length, 5, 'Write each answer as a string, like "TypeError".');
});

for (const [name, value] of Object.entries(expected)) {
  test(`\`${name}\` is correct`, async () => {
    const answers = await load(name);
    assert.equal(answers[name], value);
  });
}
