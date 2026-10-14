import { test } from 'node:test';
import assert from 'node:assert/strict';
import { stripVTControlCharacters as plain } from 'node:util';
import { findCurrent, formatHint, formatVerify } from './report.js';

const exercise = (module, name, title = name) => ({
  id: `${module}/${name}`,
  module,
  name,
  title,
  relativePath: `exercises/${module}/${name}.js`,
  testFile: `${module}/${name}.test.js`,
});

const exercises = [
  exercise('01-done', 'ex01', 'All good'),
  exercise('02-current', 'ex01', 'Passed'),
  exercise('02-current', 'ex02', 'Current'),
  exercise('02-current', 'ex03', 'Later'),
  exercise('03-next', 'ex01', 'Not started'),
];

const pass = { passed: true, failures: [] };
const fail = (...failures) => ({ passed: false, failures });

function resultsFor(...statuses) {
  return new Map(exercises.map((item, index) => [item.testFile, statuses[index]]));
}

test('findCurrent returns the first exercise that does not pass', () => {
  const results = resultsFor(pass, pass, fail(), fail(), fail());
  assert.equal(findCurrent(exercises, results), exercises[2]);
});

test('formatVerify details the current module and summarizes the others', () => {
  const results = resultsFor(
    pass,
    pass,
    fail(
      { name: 'first test', message: 'expected 1\nbut got 2\n' },
      { name: 'second test', message: 'ignored' },
    ),
    fail({ name: 'later test', message: 'ignored' }),
    fail({ name: 'next test', message: 'ignored' }),
  );

  assert.equal(
    plain(formatVerify(exercises, results)),
    [
      '',
      '✔ 01-done  1/1',
      '02-current  1/3',
      '  ✔ ex01  Passed',
      '  ✖ ex02  Current',
      '  ○ ex03  Later',
      '○ 03-next  0/1',
      '',
      `Progress ${'█'.repeat(8)}${'░'.repeat(12)} 2/5`,
      '',
      '✖ 02-current/ex02 · Current',
      '',
      '  ✖ first test',
      '  ✖ second test',
      '',
      '    expected 1',
      '    but got 2',
      '',
      'Open exercises/02-current/ex02.js and make the tests pass.',
      'Stuck? Run npm run hint',
      '',
    ].join('\n'),
  );
});

test('formatVerify celebrates when everything passes', () => {
  const output = plain(formatVerify(exercises, resultsFor(pass, pass, pass, pass, pass)));
  assert.match(output, /Progress █{20} 5\/5/);
  assert.match(output, /All exercises done!/);
});

test('formatHint shows the requested hint and points to the next one', () => {
  const output = plain(formatHint(exercises[0], ['First.', 'Second.'], 1));
  assert.equal(
    output,
    [
      '',
      'Hint 1/2 · 01-done/ex01 · All good',
      '',
      '  First.',
      '',
      'Still stuck? Run npm run hint -- 01-done/ex01 2',
      '',
      '',
    ].join('\n'),
  );
});

test('formatHint keeps the level within the available hints', () => {
  const hints = ['First.', 'Second.'];
  assert.match(plain(formatHint(exercises[0], hints, 0)), /Hint 1\/2/);

  const last = plain(formatHint(exercises[0], hints, 9));
  assert.match(last, /Hint 2\/2/);
  assert.match(last, /That was the last hint\. Read the lesson again: lessons[/\\]01-done\.md/);
});

test('formatHint says when an exercise has no hints', () => {
  assert.match(plain(formatHint(exercises[0], [], 1)), /No hints for 01-done\/ex01 yet/);
});
