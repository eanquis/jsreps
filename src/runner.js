import { run } from 'node:test';

/**
 * Runs the given test files and returns, for each file, whether it passed
 * and which tests failed.
 */
export async function runTestFiles(files, { runner = run, timeout = 5000 } = {}) {
  const results = new Map(
    files.map((file) => [file, { passed: true, failures: [], stderr: '' }]),
  );

  for await (const { type, data } of runner({ files, timeout })) {
    const result = results.get(data.file);
    if (!result) continue;

    if (type === 'test:stderr') {
      result.stderr += data.message;
    } else if (type === 'test:fail') {
      result.passed = false;
      const { error } = data.details;
      // Parent tests fail when a child fails; the child already explains why.
      if (error.failureType !== 'subtestsFailed') {
        result.failures.push({ name: data.name, message: describeError(error) });
      }
    }
  }

  for (const [file, result] of results) {
    for (const failure of result.failures) {
      // The whole file failed before any test ran: the details are in stderr.
      if (failure.name === file) {
        failure.name = 'test file crashed';
        failure.message = result.stderr.trim() || failure.message;
      }
    }
  }
  return results;
}

function describeError(error) {
  return error.cause instanceof Error ? error.cause.message : String(error.cause);
}
