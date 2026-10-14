import { test } from 'node:test';
import assert from 'node:assert/strict';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { listExercises } from './exercises.js';

const root = fileURLToPath(new URL('__fixtures__/project/', import.meta.url));

test('lists exercises ordered by module and name, ignoring other files', async () => {
  const exercises = await listExercises(root);
  assert.deepEqual(
    exercises.map((exercise) => exercise.id),
    ['01-basics/ex01', '01-basics/ex02', '02-more/ex01', '02-more/ex02'],
  );
});

test('describes each exercise', async () => {
  const [first] = await listExercises(root);
  assert.deepEqual(first, {
    id: '01-basics/ex01',
    module: '01-basics',
    name: 'ex01',
    title: 'Say hello',
    relativePath: path.join('exercises', '01-basics', 'ex01.js'),
    testFile: path.join(root, 'tests', '01-basics', 'ex01.test.js'),
  });
});

test('falls back to the exercise name when there is no title', async () => {
  const exercises = await listExercises(root);
  assert.equal(exercises[1].title, 'ex02');
});
