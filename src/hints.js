import { existsSync } from 'node:fs';
import { readFile } from 'node:fs/promises';
import path from 'node:path';

/**
 * Returns the hints for an exercise, from the least to the most revealing.
 * Hints live in `<root>/hints/<module>.json`, keyed by exercise name.
 */
export async function loadHints(root, exercise) {
  const file = path.join(root, 'hints', `${exercise.module}.json`);
  if (!existsSync(file)) return [];
  const hints = JSON.parse(await readFile(file, 'utf8'));
  return hints[exercise.name] ?? [];
}
