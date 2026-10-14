import { test } from 'node:test';
import assert from 'node:assert/strict';
import { exercise } from '../helpers.js';

const { load, code } = exercise('09-errors/ex17');

const expected = {
  answer1: ['a', 'c', 'd'],
  answer2: ['a', 'b', 'd'],
  answer3: ['start', 'SyntaxError', 'end'],
};

test('answers are written by hand', async () => {
  const source = await code();
  assert.doesNotMatch(source, /\btry\b|\.push\(/, 'Predict the answers instead of running the code.');
  const literals = source.match(/answer\d\s*=\s*\[/g) ?? [];
  assert.equal(literals.length, 3, 'Write each answer as an array, like [\'x\', \'y\'].');
});

for (const [name, value] of Object.entries(expected)) {
  test(`\`${name}\` is correct`, async () => {
    const answers = await load(name);
    assert.deepEqual(answers[name], value);
  });
}
