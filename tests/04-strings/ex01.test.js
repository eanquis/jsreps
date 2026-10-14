import { test } from 'node:test';
import assert from 'node:assert/strict';
import { exercise } from '../helpers.js';

const { load, code } = exercise('04-strings/ex01');

const expected = { answer1: 5, answer2: 'h', answer3: 'o', answer4: 'o', answer5: 8 };

test('answers are written by hand', async () => {
  assert.doesNotMatch(
    await code(),
    /\.length|\.at\(|\[/,
    'Write the results, not the expressions.',
  );
});

for (const [name, value] of Object.entries(expected)) {
  test(`\`${name}\` is correct`, async () => {
    const answers = await load(name);
    assert.equal(answers[name], value);
  });
}
