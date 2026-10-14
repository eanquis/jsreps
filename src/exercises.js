import { readdir, readFile } from 'node:fs/promises';
import path from 'node:path';

const EXERCISE_FILE = /^ex\d+\.js$/;
const TITLE = /Exercise \d+ · (.+)/;

/**
 * Finds every exercise in `<root>/exercises`, ordered by module and name.
 */
export async function listExercises(root) {
  const exercisesDir = path.join(root, 'exercises');
  const entries = await readdir(exercisesDir, { withFileTypes: true });
  const modules = entries
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
    .sort();

  const exercises = [];
  for (const moduleName of modules) {
    const files = await readdir(path.join(exercisesDir, moduleName));
    const names = files
      .filter((file) => EXERCISE_FILE.test(file))
      .sort()
      .map((file) => path.basename(file, '.js'));

    for (const name of names) {
      const relativePath = path.join('exercises', moduleName, `${name}.js`);
      const source = await readFile(path.join(root, relativePath), 'utf8');
      exercises.push({
        id: `${moduleName}/${name}`,
        module: moduleName,
        name,
        title: source.match(TITLE)?.[1] ?? name,
        relativePath,
        testFile: path.join(root, 'tests', moduleName, `${name}.test.js`),
      });
    }
  }
  return exercises;
}
