import { test } from 'node:test';
import assert from 'node:assert/strict';
import { exercise } from '../helpers.js';

const { load, code } = exercise('06-functions/ex08');

const expected = { answer1: 'positive', answer2: 'zero', answer3: 'undefined' };

test('answers are written as strings', async () => {
  const literals = (await code()).match(/answer\d\s*=\s*['"`]/g) ?? [];
  assert.equal(literals.length, 3, 'Write each answer between quotes.');
});

for (const [name, value] of Object.entries(expected)) {
  test(`\`${name}\` is correct`, async () => {
    const answers = await load(name);
    assert.equal(answers[name], value);
  });
}
