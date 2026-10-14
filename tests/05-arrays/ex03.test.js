import { test } from 'node:test';
import assert from 'node:assert/strict';
import { exercise } from '../helpers.js';

const { load, code } = exercise('05-arrays/ex03');

const expected = { answer1: 4, answer2: 'b', answer3: undefined, answer4: 'd' };

test('answers are written by hand', async () => {
  assert.doesNotMatch(
    await code(),
    /answer\d\s*=\s*letters/,
    'Write the values themselves instead of reading them from `letters`.',
  );
});

for (const [name, value] of Object.entries(expected)) {
  test(`\`${name}\` is correct`, async () => {
    const answers = await load(name);
    assert.equal(answers[name], value);
  });
}
