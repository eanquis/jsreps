import { test } from 'node:test';
import assert from 'node:assert/strict';
import { exercise } from '../helpers.js';

const { load, code } = exercise('07-objects/ex06');

const expected = { answer1: false, answer2: true, answer3: 'Grace', answer4: 'Ada' };

test('answers are written by hand', async () => {
  const literals = (await code()).match(/answer\d\s*=\s*(true|false|'[^']*'|"[^"]*")\s*;/g) ?? [];
  assert.equal(literals.length, 4, 'Write each answer as true, false or a string, without using a, b or c.');
});

for (const [name, value] of Object.entries(expected)) {
  test(`\`${name}\` is correct`, async () => {
    const answers = await load(name);
    assert.equal(answers[name], value);
  });
}
