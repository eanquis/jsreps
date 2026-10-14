import path from 'node:path';
import { styleText } from 'node:util';

const BAR_WIDTH = 20;

/**
 * The exercise to work on next: the first one whose tests don't pass.
 */
export function findCurrent(exercises, results) {
  return exercises.find((exercise) => !results.get(exercise.testFile).passed);
}

export function formatVerify(exercises, results) {
  const current = findCurrent(exercises, results);
  const passed = (exercise) => results.get(exercise.testFile).passed;
  const lines = [''];

  for (const [moduleName, items] of Map.groupBy(exercises, (exercise) => exercise.module)) {
    const done = items.filter(passed).length;
    if (items.includes(current)) {
      lines.push(styleText('bold', `${moduleName}  ${done}/${items.length}`));
      for (const item of items) {
        lines.push(`  ${icon(item, passed(item), current)} ${item.name}  ${item.title}`);
      }
    } else {
      const moduleIcon = done === items.length ? styleText('green', '✔') : styleText('dim', '○');
      lines.push(`${moduleIcon} ${moduleName}  ${done}/${items.length}`);
    }
  }

  lines.push('', progressBar(exercises.filter(passed).length, exercises.length), '');

  if (!current) {
    lines.push(styleText('green', 'All exercises done! Great work. 🎉'), '');
    return lines.join('\n');
  }

  const [first, ...others] = results.get(current.testFile).failures;
  lines.push(
    styleText(['bold', 'red'], `✖ ${current.id} · ${current.title}`),
    '',
    `  ${styleText('red', '✖')} ${first.name}`,
    ...others.map((failure) => `  ${styleText('red', '✖')} ${failure.name}`),
    '',
    indent(first.message.trim(), 4),
    '',
    `Open ${styleText('cyan', current.relativePath)} and make the tests pass.`,
    `Stuck? Run ${styleText('cyan', 'npm run hint')}`,
    '',
  );
  return lines.join('\n');
}

export function formatHint(exercise, hints, level) {
  if (hints.length === 0) {
    return `\nNo hints for ${exercise.id} yet. Read the lesson again: ${lessonPath(exercise)}\n\n`;
  }

  const shown = Math.min(Math.max(level, 1), hints.length);
  const footer =
    shown < hints.length
      ? `Still stuck? Run ${styleText('cyan', `npm run hint -- ${exercise.id} ${shown + 1}`)}`
      : `That was the last hint. Read the lesson again: ${lessonPath(exercise)}`;

  return [
    '',
    styleText('bold', `Hint ${shown}/${hints.length} · ${exercise.id} · ${exercise.title}`),
    '',
    indent(hints[shown - 1], 2),
    '',
    footer,
    '',
    '',
  ].join('\n');
}

function icon(exercise, passed, current) {
  if (passed) return styleText('green', '✔');
  if (exercise === current) return styleText('red', '✖');
  return styleText('dim', '○');
}

function progressBar(done, total) {
  const filled = Math.round((done / total) * BAR_WIDTH);
  const bar = '█'.repeat(filled) + '░'.repeat(BAR_WIDTH - filled);
  return `Progress ${styleText('green', bar)} ${done}/${total}`;
}

function indent(text, spaces) {
  const pad = ' '.repeat(spaces);
  return text
    .split('\n')
    .map((line) => (line ? pad + line : line))
    .join('\n');
}

function lessonPath(exercise) {
  return path.join('lessons', `${exercise.module}.md`);
}
