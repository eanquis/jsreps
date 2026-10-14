import { test } from 'node:test';
import assert from 'node:assert/strict';
import { assertCalls, exercise } from '../helpers.js';

const { load, code } = exercise('02-conditionals/ex02');

test('visitors under 18 are asked to come with an adult', async () => {
  const { welcome } = await load('welcome');
  assertCalls(welcome, [
    [[17], 'Welcome! Please come with an adult.'],
    [[10], 'Welcome! Please come with an adult.'],
    [[0], 'Welcome! Please come with an adult.'],
  ]);
});

test('visitors aged 18 or more get the default message', async () => {
  const { welcome } = await load('welcome');
  assertCalls(welcome, [
    [[18], 'Welcome!'],
    [[40], 'Welcome!'],
  ]);
});

test('uses an if', async () => {
  assert.match(await code(), /\bif\s*\(/);
});
