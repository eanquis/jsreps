import { test } from 'node:test';
import assert from 'node:assert/strict';
import { assertCalls, exercise } from '../helpers.js';

const { load } = exercise('07-objects/ex05');

test('existing keys are found', async () => {
  const { hasSetting } = await load('hasSetting');
  assertCalls(hasSetting, [
    [[{ theme: 'dark' }, 'theme'], true],
    [[{ theme: 'dark', volume: 7 }, 'volume'], true],
  ]);
});

test('keys with falsy values exist too', async () => {
  const { hasSetting } = await load('hasSetting');
  assertCalls(hasSetting, [
    [[{ darkMode: false }, 'darkMode'], true],
    [[{ volume: 0 }, 'volume'], true],
    [[{ nickname: '' }, 'nickname'], true],
    [[{ nickname: undefined }, 'nickname'], true],
  ]);
});

test('missing keys are not found', async () => {
  const { hasSetting } = await load('hasSetting');
  assertCalls(hasSetting, [
    [[{ theme: 'dark' }, 'volume'], false],
    [[{}, 'theme'], false],
  ]);
});
