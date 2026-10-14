import { test } from 'node:test';
import assert from 'node:assert/strict';
import { exercise } from '../helpers.js';

const { load, code } = exercise('01-variables/ex19');

test('the named constants are declared', async () => {
  const source = await code();
  assert.match(source, /const\s+SECONDS_PER_MINUTE\s*=/);
  assert.match(source, /const\s+MINUTES_PER_HOUR\s*=/);
});

test('`secondsPerHour` is calculated from the constants', async () => {
  const { secondsPerHour } = await load('secondsPerHour');
  assert.equal(secondsPerHour, 3600);
  const declaration = (await code()).match(/secondsPerHour\s*=([^;\n]*)/)?.[1] ?? '';
  assert.match(declaration, /SECONDS_PER_MINUTE/, 'Use SECONDS_PER_MINUTE.');
  assert.match(declaration, /MINUTES_PER_HOUR/, 'Use MINUTES_PER_HOUR.');
});

test('`secondsInThreeHours` is calculated from `secondsPerHour`', async () => {
  const { secondsInThreeHours } = await load('secondsInThreeHours');
  assert.equal(secondsInThreeHours, 10800);
  assert.match(await code(), /secondsInThreeHours\s*=[^;\n]*secondsPerHour/);
});
