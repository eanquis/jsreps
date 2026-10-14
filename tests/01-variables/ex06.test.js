import { test } from 'node:test';
import assert from 'node:assert/strict';
import { exercise } from '../helpers.js';

const { load, code } = exercise('01-variables/ex06');

test('`balance` ends up correct', async () => {
  const { balance } = await load('balance');
  assert.equal(balance, 240);
});

for (const operator of ['+=', '-=', '*=']) {
  test(`uses ${operator}`, async () => {
    const pattern = new RegExp(`balance\\s*\\${operator}\\s*\\d+`);
    assert.match(await code(), pattern, `Update \`balance\` using ${operator}.`);
  });
}
