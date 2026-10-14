// Runs the exercise tests against the reference solutions in `solutions/`,
// which must pass with 100% coverage.
import { spawnSync } from 'node:child_process';

const { status } = spawnSync(
  process.execPath,
  [
    '--test',
    '--experimental-test-coverage',
    '--test-coverage-include=solutions/**',
    '--test-coverage-lines=100',
    '--test-coverage-branches=100',
    '--test-coverage-functions=100',
    'tests/**/*.test.js',
  ],
  { stdio: 'inherit', env: { ...process.env, JSREPS_EXERCISES_DIR: 'solutions' } },
);
process.exit(status);
