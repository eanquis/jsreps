import { test } from 'node:test';
import assert from 'node:assert/strict';
import { assertCalls, exercise } from '../helpers.js';

const { load } = exercise('02-conditionals/ex16');

test('each color has its own action', async () => {
  const { trafficLight } = await load('trafficLight');
  assertCalls(trafficLight, [
    [['green'], 'go'],
    [['yellow'], 'slow down'],
    [['red'], 'stop'],
  ]);
});

test('unknown colors are invalid', async () => {
  const { trafficLight } = await load('trafficLight');
  assertCalls(trafficLight, [
    [['blue'], 'invalid color'],
    [[''], 'invalid color'],
  ]);
});
