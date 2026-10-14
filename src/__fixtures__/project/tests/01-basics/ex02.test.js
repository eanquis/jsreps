import { test } from 'node:test';
import assert from 'node:assert/strict';

test('first failure', () => assert.equal(1, 2, 'first message'));

test('parent', async (t) => {
  await t.test('second failure', () => assert.fail('second message'));
});
