import { fileURLToPath } from 'node:url';
import { listExercises } from './exercises.js';
import { loadHints } from './hints.js';
import { findCurrent, formatHint, formatVerify } from './report.js';
import { runTestFiles } from './runner.js';

const HELP = `
Usage: npm run <command>

  verify            Check your exercises and show your progress (default)
  verify -- --all   Check every module, not only up to the current one
  watch             Run verify again every time you save an exercise
  hint [level]      Show a hint for the exercise you're working on
  hint <id> [level] Show a hint for a specific exercise, e.g. 01-variables/ex04

`;

/**
 * Entry point of the jsreps CLI. Returns the process exit code.
 */
export async function main(
  argv,
  {
    root = fileURLToPath(new URL('..', import.meta.url)),
    write = (text) => process.stdout.write(text),
    runTests = runTestFiles,
  } = {},
) {
  const [command = 'verify', ...args] = argv;
  const context = { root, write, runTests };

  switch (command) {
    case 'verify':
      return verify(context, args);
    case 'hint':
      return hint(context, args);
    case 'help':
    case '--help':
    case '-h':
      write(HELP);
      return 0;
    default:
      write(`\nUnknown command: ${command}\n${HELP}`);
      return 1;
  }
}

async function verify({ root, write, runTests }, args) {
  const exercises = await listExercises(root);
  const results = await check(exercises, runTests, args.includes('--all'));
  write(formatVerify(exercises, results));
  // In watch mode a failing exercise is expected, not an error worth reporting.
  const watching = args.includes('--watch');
  return findCurrent(exercises, results) && !watching ? 1 : 0;
}

async function hint({ root, write, runTests }, args) {
  const exercises = await listExercises(root);
  const [first, second] = args;
  let exercise;
  let level;

  if (first !== undefined && !/^\d+$/.test(first)) {
    exercise = exercises.find((candidate) => candidate.id === first);
    level = second;
    if (!exercise) {
      write(`\nUnknown exercise: ${first}\nExercise ids look like ${exercises[0].id}\n\n`);
      return 1;
    }
  } else {
    const results = await check(exercises, runTests, false);
    exercise = findCurrent(exercises, results);
    level = first;
    if (!exercise) {
      write('\nAll exercises are done. No hints needed! 🎉\n\n');
      return 0;
    }
  }

  const hints = await loadHints(root, exercise);
  write(formatHint(exercise, hints, Number(level ?? 1)));
  return 0;
}

/**
 * Runs the tests module by module. Unless `all` is set, it stops after the
 * first module with a failing exercise: checking later modules would only
 * make every save slower.
 */
async function check(exercises, runTests, all) {
  const results = new Map();
  for (const items of Map.groupBy(exercises, (exercise) => exercise.module).values()) {
    const moduleResults = await runTests(items.map((exercise) => exercise.testFile));
    for (const [file, result] of moduleResults) results.set(file, result);
    if (!all && findCurrent(items, moduleResults)) break;
  }
  return results;
}
