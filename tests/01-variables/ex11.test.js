import { test } from 'node:test';
import assert from 'node:assert/strict';
import { exercise } from '../helpers.js';

const { load, code } = exercise('01-variables/ex11');

const expected = {
  answer1: 'number',
  answer2: 'string',
  answer3: 'boolean',
  answer4: 'undefined',
  answer5: 'string',
};

test('answers are written by hand, without typeof', async () => {
  assert.doesNotMatch(await code(), /typeof/, 'Predict the answers instead of using typeof.');
});

for (const [name, type] of Object.entries(expected)) {
  test(`\`${name}\` is correct`, async () => {
    const answers = await load(name);
    assert.equal(answers[name], type);
  });
}
