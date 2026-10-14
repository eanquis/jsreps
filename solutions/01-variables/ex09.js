/**
 * Exercise 09 · Template literals
 *
 * Strings written with backticks (`) can include variables using ${...}.
 *
 * Task:
 *   Declare and export a constant `fullName` with the first and last name
 *   separated by a space. Build it with a template literal.
 */

const firstName = 'Ada';
const lastName = 'Lovelace';

export const fullName = `${firstName} ${lastName}`;
