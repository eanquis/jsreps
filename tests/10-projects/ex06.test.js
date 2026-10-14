import { test } from 'node:test';
import assert from 'node:assert/strict';
import { assertCalls, exercise } from '../helpers.js';

const { load } = exercise('10-projects/ex06');

test('calculates min, max and average', async () => {
  const { temperatureStats } = await load('temperatureStats');
  const stats = temperatureStats([20, 25, 15, 30]);
  assert.equal(stats?.min, 15, 'min should be the lowest reading.');
  assert.equal(stats.max, 30, 'max should be the highest reading.');
  assert.equal(stats.average, 22.5, 'average should be the sum divided by the number of readings.');
});

test('detects the trend', async () => {
  const { temperatureStats } = await load('temperatureStats');
  assertCalls(temperatureStats, [
    [[[10, 12, 15]], { min: 10, max: 15, average: 37 / 3, trend: 'rising' }],
    [[[15, 20, 9]], { min: 9, max: 20, average: 44 / 3, trend: 'falling' }],
    [[[18, 30, 18]], { min: 18, max: 30, average: 22, trend: 'stable' }],
    [[[-5]], { min: -5, max: -5, average: -5, trend: 'stable' }],
  ]);
});

test('throws when there are no readings', async () => {
  const { temperatureStats } = await load('temperatureStats');
  assert.throws(() => temperatureStats([]), { message: 'No readings' });
});
