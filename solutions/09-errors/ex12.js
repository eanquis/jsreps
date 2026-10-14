/**
 * Exercise 12 · Fix the bug: the catch that hides everything
 *
 * `loadSettings` should return the settings from a JSON text, falling back to
 * the defaults only when the JSON is invalid. But it always returns the
 * defaults: the `catch` hides every error, including a bug in the code.
 *
 * Task:
 *   1. Make the `catch` handle only SyntaxError (invalid JSON).
 *      Any other error must be thrown again: `throw error;`
 *   2. Then fix the bug that the catch was hiding.
 */

function applyDefaults(settings) {
  return { theme: settings.theme ?? 'light' };
}

export function loadSettings(text) {
  try {
    const settings = JSON.parse(text);
    return applyDefaults(settings);
  } catch (error) {
    if (error instanceof SyntaxError) {
      return { theme: 'light' };
    }
    throw error;
  }
}
