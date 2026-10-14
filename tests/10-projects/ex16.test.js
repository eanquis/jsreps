import { test } from 'node:test';
import assert from 'node:assert/strict';
import { assertCalls, exercise } from '../helpers.js';

const { load } = exercise('10-projects/ex16');

const students = [
  { name: 'Ada', grades: [90, 100] },
  { name: 'Bob', grades: [70, 80, 90] },
  { name: 'Cid', grades: [50, 60] },
];

test('average calculates the average of the grades', async () => {
  const { average } = await load('average');
  assertCalls(average, [
    [[[90, 100]], 95],
    [[[70, 80, 90]], 80],
    [[[42]], 42],
  ]);
});

test('average throws when there are no grades', async () => {
  const { average } = await load('average');
  assert.throws(() => average([]), { message: 'No grades' });
});

test('letterGrade converts an average into a letter', async () => {
  const { letterGrade } = await load('letterGrade');
  assertCalls(letterGrade, [
    [[100], 'A'],
    [[90], 'A'],
    [[89.9], 'B'],
    [[80], 'B'],
    [[70], 'C'],
    [[60], 'D'],
    [[59], 'F'],
    [[0], 'F'],
  ]);
});

test('report describes every student', async () => {
  const { report } = await load('report');
  assertCalls(report, [
    [
      [students],
      [
        { name: 'Ada', average: 95, letter: 'A' },
        { name: 'Bob', average: 80, letter: 'B' },
        { name: 'Cid', average: 55, letter: 'F' },
      ],
    ],
    [[[]], []],
  ]);
});

test('bestStudent finds the highest average', async () => {
  const { bestStudent } = await load('bestStudent');
  assertCalls(bestStudent, [
    [[students], 'Ada'],
    [[students.toReversed()], 'Ada'],
  ]);
});

test('bestStudent picks the first one on a tie', async () => {
  const { bestStudent } = await load('bestStudent');
  const tied = [
    { name: 'Eve', grades: [80] },
    { name: 'Fay', grades: [90, 70] },
  ];
  assertCalls(bestStudent, [[[tied], 'Eve']]);
});
