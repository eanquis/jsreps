import { test } from 'node:test';
import assert from 'node:assert/strict';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { runTestFiles } from './runner.js';
import { outsideTestRunner } from './__fixtures__/helpers.js';

const tests = fileURLToPath(new URL('__fixtures__/project/tests/', import.meta.url));
const file = (name) => path.join(tests, name);

test('reports passing and failing files', async () => {
  const passing = file('01-basics/ex01.test.js');
  const failing = file('01-basics/ex02.test.js');
  const results = await outsideTestRunner(() => runTestFiles([passing, failing]));

  assert.deepEqual(results.get(passing), { passed: true, failures: [], stderr: '' });
  assert.equal(results.get(failing).passed, false);
  assert.deepEqual(
    results.get(failing).failures.map(({ name }) => name),
    ['first failure', 'second failure'],
  );
  assert.match(results.get(failing).failures[0].message, /first message/);
  assert.match(results.get(failing).failures[1].message, /second message/);
});

test('explains a file that crashed while loading', async () => {
  const crashing = file('02-more/ex01.test.js');
  const results = await outsideTestRunner(() => runTestFiles([crashing]));
  const [failure] = results.get(crashing).failures;

  assert.equal(failure.name, 'test file crashed');
  assert.match(failure.message, /Error: fixture crashed/);
});

test('falls back to the failure cause when a crash prints nothing', async () => {
  const exiting = file('02-more/ex02.test.js');
  const results = await outsideTestRunner(() => runTestFiles([exiting]));
  assert.deepEqual(results.get(exiting).failures, [
    { name: 'test file crashed', message: 'test failed' },
  ]);
});

test('ignores events from files it was not asked about', async () => {
  async function* runner() {
    yield { type: 'test:fail', data: { file: 'other.test.js' } };
  }
  const results = await runTestFiles(['mine.test.js'], { runner });
  assert.equal(results.get('mine.test.js').passed, true);
});
