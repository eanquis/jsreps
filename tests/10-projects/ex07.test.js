import { test } from 'node:test';
import { assertCalls, exercise } from '../helpers.js';

const { load } = exercise('10-projects/ex07');

test('a strong password has no problems', async () => {
  const { passwordProblems } = await load('passwordProblems');
  assertCalls(passwordProblems, [
    [['Secret123'], []],
    [['aB3aB3aB3'], []],
  ]);
});

test('lists every broken rule, in order', async () => {
  const { passwordProblems } = await load('passwordProblems');
  assertCalls(passwordProblems, [
    [['hello'], ['length', 'uppercase', 'digit']],
    [['Sh0rt'], ['length']],
    [['alllowercase1'], ['uppercase']],
    [['ALLUPPERCASE1'], ['lowercase']],
    [['NoDigitsHere'], ['digit']],
    [[''], ['length', 'uppercase', 'lowercase', 'digit']],
  ]);
});
