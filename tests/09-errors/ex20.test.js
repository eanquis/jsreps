import { test } from 'node:test';
import assert from 'node:assert/strict';
import { assertCalls, assertThrows, exercise } from '../helpers.js';

const { load } = exercise('09-errors/ex20');

test('parses entries into an object', async () => {
  const { parseConfig } = await load('parseConfig');
  assertCalls(parseConfig, [
    [['theme=dark'], { theme: 'dark' }],
    [['theme=dark;lang=en'], { theme: 'dark', lang: 'en' }],
    [['  theme = dark ;  lang=en  '], { theme: 'dark', lang: 'en' }],
  ]);
});

test('skips empty entries', async () => {
  const { parseConfig } = await load('parseConfig');
  assertCalls(parseConfig, [
    [[''], {}],
    [['theme=dark;'], { theme: 'dark' }],
    [['a=1;;  ;b=2'], { a: '1', b: '2' }],
  ]);
});

test('values can be empty or contain =', async () => {
  const { parseConfig } = await load('parseConfig');
  assertCalls(parseConfig, [
    [['url=a=b'], { url: 'a=b' }],
    [['name='], { name: '' }],
  ]);
});

test('rejects entries that are not key=value', async () => {
  const { parseConfig } = await load('parseConfig');
  assertThrows(parseConfig, ['theme'], {
    name: 'SyntaxError',
    message: 'Invalid entry "theme": expected key=value',
  });
  assertThrows(parseConfig, ['a=1; oops ;b=2'], {
    name: 'SyntaxError',
    message: 'Invalid entry "oops": expected key=value',
  });
  assertThrows(parseConfig, ['=dark'], {
    name: 'SyntaxError',
    message: 'Invalid entry "=dark": expected key=value',
  });
});

test('rejects duplicate keys', async () => {
  const { parseConfig } = await load('parseConfig');
  assertThrows(parseConfig, ['theme=dark;theme=light'], {
    name: 'Error',
    message: 'Duplicate key "theme"',
  });
  assertThrows(parseConfig, ['a=1; b=2; a = 3'], { name: 'Error', message: 'Duplicate key "a"' });
});
