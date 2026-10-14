/**
 * Inside `node --test`, nested runs report to the outer runner instead of
 * returning events. The CLI never runs nested, so tests that use the real
 * runner pretend they're outside a test runner while they call it.
 */
export async function outsideTestRunner(fn) {
  const context = process.env.NODE_TEST_CONTEXT;
  delete process.env.NODE_TEST_CONTEXT;
  try {
    return await fn();
  } finally {
    if (context !== undefined) process.env.NODE_TEST_CONTEXT = context;
  }
}
