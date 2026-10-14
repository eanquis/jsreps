import { test } from 'node:test';
import assert from 'node:assert/strict';
import { exercise } from '../helpers.js';

const { load, code } = exercise('01-variables/ex10');

test('`place` is "Lisbon, Portugal"', async () => {
  const { place } = await load('place');
  assert.equal(place, 'Lisbon, Portugal');
});

test('`place` is built with +', async () => {
  const declaration = (await code()).match(/place\s*=([^;\n]*)/)?.[1] ?? '';
  assert.doesNotMatch(declaration, /`/, 'Use + instead of a template literal.');
  assert.match(declaration, /\bcity\b[\s\S]*\+[\s\S]*\bcountry\b/, 'Join `city` and `country` with +.');
});
