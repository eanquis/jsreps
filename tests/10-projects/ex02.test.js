import { test } from 'node:test';
import { assertCalls, exercise } from '../helpers.js';

const { load } = exercise('10-projects/ex02');

test('capitalizes every word', async () => {
  const { titleCase } = await load('titleCase');
  assertCalls(titleCase, [
    [['hello world'], 'Hello World'],
    [['the lord OF the rings'], 'The Lord Of The Rings'],
    [['JAVASCRIPT'], 'Javascript'],
    [['a b c'], 'A B C'],
  ]);
});

test('keeps an empty string empty', async () => {
  const { titleCase } = await load('titleCase');
  assertCalls(titleCase, [[[''], '']]);
});
