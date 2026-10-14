import { test } from 'node:test';
import assert from 'node:assert/strict';
import { assertCalls, exercise } from '../helpers.js';

const { load, code } = exercise('02-conditionals/ex07');

test('adults with a license can drive', async () => {
  const { canDrive } = await load('canDrive');
  assertCalls(canDrive, [
    [[18, true], true],
    [[45, true], true],
  ]);
});

test('without a license, nobody drives', async () => {
  const { canDrive } = await load('canDrive');
  assertCalls(canDrive, [
    [[18, false], false],
    [[45, false], false],
  ]);
});

test('under 18, nobody drives', async () => {
  const { canDrive } = await load('canDrive');
  assertCalls(canDrive, [
    [[17, true], false],
    [[12, false], false],
  ]);
});

test('uses &&', async () => {
  assert.match(await code(), /&&/);
});
