import { test } from 'node:test';
import assert from 'node:assert/strict';
import { fileURLToPath } from 'node:url';
import { stripVTControlCharacters as plain } from 'node:util';
import { main } from './cli.js';
import { outsideTestRunner } from './__fixtures__/helpers.js';

const root = fileURLToPath(new URL('__fixtures__/project/', import.meta.url));

/** Runs the CLI against the fixture project, with fake test results. */
async function cli(argv, passing = []) {
  let output = '';
  const runTests = async (files) =>
    new Map(
      files.map((file) => {
        const passed = passing.some((id) => file.endsWith(`${id}.test.js`));
        return [file, { passed, failures: [{ name: 'a test', message: 'a message' }] }];
      }),
    );
  const write = (text) => {
    output += plain(text);
  };
  const exitCode = await main(argv, { root, write, runTests });
  return { exitCode, output };
}

const all = ['01-basics/ex01', '01-basics/ex02', '02-more/ex01', '02-more/ex02'];

test('verify is the default command', async () => {
  const { exitCode, output } = await cli([]);
  assert.equal(exitCode, 1);
  assert.match(output, /✖ 01-basics\/ex01 · Say hello/);
});

test('verify exits with 0 when every exercise passes', async () => {
  const { exitCode, output } = await cli(['verify'], all);
  assert.equal(exitCode, 0);
  assert.match(output, /All exercises done!/);
});

test('verify stops checking after the first module with a failing exercise', async () => {
  const { output } = await cli(['verify']);
  assert.match(output, /^○ 02-more$/m);
  assert.match(output, /Later modules are checked once you finish this one\./);
  assert.match(output, /Progress .* 0\/4/);
});

test('verify checks the next module once the current one is done', async () => {
  const { output } = await cli(['verify'], ['01-basics/ex01', '01-basics/ex02']);
  assert.match(output, /✔ 01-basics  2\/2/);
  assert.match(output, /✖ 02-more\/ex01/);
  assert.doesNotMatch(output, /Later modules/);
});

test('verify --all checks every module', async () => {
  const { output } = await cli(['verify', '--all']);
  assert.match(output, /○ 02-more  0\/2/);
  assert.doesNotMatch(output, /Later modules/);
});

test('verify --watch does not fail while exercises are pending', async () => {
  const { exitCode, output } = await cli(['verify', '--watch']);
  assert.equal(exitCode, 0);
  assert.match(output, /✖ 01-basics\/ex01/);
});

test('verify runs the real tests by default', async () => {
  let output = '';
  const exitCode = await outsideTestRunner(() =>
    main(['verify'], { root, write: (text) => (output += text) }),
  );
  assert.equal(exitCode, 1);
  assert.match(plain(output), /Progress .* 1\/4/);
});

test('hint shows the first hint of the current exercise', async () => {
  const { exitCode, output } = await cli(['hint']);
  assert.equal(exitCode, 0);
  assert.match(output, /Hint 1\/2 · 01-basics\/ex01/);
  assert.match(output, /First hint\./);
});

test('hint accepts a level', async () => {
  const { output } = await cli(['hint', '2']);
  assert.match(output, /Second hint\./);
});

test('hint accepts an exercise id and a level', async () => {
  const { output } = await cli(['hint', '01-basics/ex01', '2'], all);
  assert.match(output, /Hint 2\/2 · 01-basics\/ex01/);
});

test('hint rejects an unknown exercise', async () => {
  const { exitCode, output } = await cli(['hint', 'nope']);
  assert.equal(exitCode, 1);
  assert.match(output, /Unknown exercise: nope/);
  assert.match(output, /look like 01-basics\/ex01/);
});

test('hint has nothing to say when every exercise passes', async () => {
  const { exitCode, output } = await cli(['hint'], all);
  assert.equal(exitCode, 0);
  assert.match(output, /All exercises are done/);
});

for (const command of ['help', '--help', '-h']) {
  test(`${command} shows the usage`, async () => {
    const { exitCode, output } = await cli([command]);
    assert.equal(exitCode, 0);
    assert.match(output, /Usage: npm run <command>/);
  });
}

test('unknown commands show the usage and fail', async () => {
  const { exitCode, output } = await cli(['dance']);
  assert.equal(exitCode, 1);
  assert.match(output, /Unknown command: dance/);
  assert.match(output, /Usage:/);
});
