import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { inspect } from 'node:util';

const root = fileURLToPath(new URL('..', import.meta.url));
// Maintainers point this at the reference solutions to validate the tests.
const exercisesDir = path.resolve(root, process.env.JSREPS_EXERCISES_DIR ?? 'exercises');

/**
 * Gives a test file access to one exercise.
 *
 *   const { load, code } = exercise('01-variables/ex01');
 *   const { greeting } = await load('greeting');
 */
export function exercise(id) {
  const file = path.join(exercisesDir, `${id}.js`);
  let module;
  let source;

  return {
    /** Imports the exercise and checks that it exports every given name. */
    async load(...names) {
      module ??= importExercise(file);
      const exports = await module;
      for (const name of names) {
        if (!(name in exports)) {
          throw new Error(
            `Your code doesn't export \`${name}\`.\n` +
              `Declare it with \`export\`, e.g. export const ${name} = ...`,
          );
        }
      }
      return exports;
    },

    /** The exercise source code, without comments. */
    async code() {
      source ??= readFile(file, 'utf8').then(stripComments);
      return source;
    },
  };
}

/**
 * Calls a function with each list of arguments and checks what it returns.
 *
 *   assertCalls(double, [
 *     [[2], 4],
 *     [[-1], -2],
 *   ]);
 */
export function assertCalls(fn, cases) {
  assert.equal(typeof fn, 'function', 'This should be a function. Did you rename or delete it?');
  for (const [args, expected] of cases) {
    const call = `${fn.name}(${args.map((arg) => inspect(arg)).join(', ')})`;
    assert.deepEqual(fn(...args), expected, `${call} should return ${inspect(expected)}.`);
  }
}

/**
 * Calls a function and checks that it throws an Error with the given name
 * and message.
 *
 *   assertThrows(divide, [1, 0], { name: 'RangeError', message: 'Cannot divide by zero' });
 */
export function assertThrows(fn, args, expected) {
  assert.equal(typeof fn, 'function', 'This should be a function. Did you rename or delete it?');
  const call = `${fn.name}(${args.map((arg) => inspect(arg)).join(', ')})`;
  assert.throws(
    () => fn(...args),
    (error) => {
      assert.ok(
        error instanceof Error,
        `${call} should throw an Error object, but it threw ${inspect(error)}.`,
      );
      assert.equal(
        error.name,
        expected.name,
        `${call} should throw a ${expected.name}, but it threw a ${error.name}.`,
      );
      assert.equal(
        error.message,
        expected.message,
        `${call} should throw the message ${inspect(expected.message)}, ` +
          `but the message was ${inspect(error.message)}.`,
      );
      return true;
    },
    `${call} should throw a ${expected.name}, but it didn't throw anything.`,
  );
}

async function importExercise(file) {
  try {
    return await import(pathToFileURL(file).href);
  } catch (error) {
    throw new Error(`Your code crashed before the tests could run.\n\n${explain(error, file)}`);
  }
}

function explain(error, file) {
  const relative = path.relative(root, file);
  if (error instanceof SyntaxError) {
    // Import errors don't say where the problem is, but `node --check` does.
    const { stderr } = spawnSync(process.execPath, ['--check', file], { encoding: 'utf8' });
    const lines = stderr.split('\n');
    const end = lines.findIndex((line) => line.startsWith('SyntaxError'));
    return lines.slice(0, end + 1).join('\n').replaceAll(file, relative);
  }
  const location = error.stack.match(/:(\d+):(\d+)\)?$/m);
  const where = location ? ` (${relative}:${location[1]})` : '';
  return `${error.name}: ${error.message}${where}`;
}

function stripComments(source) {
  return source.replace(/\/\*[\s\S]*?\*\//g, '').replace(/\/\/.*$/gm, '');
}
