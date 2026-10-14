/**
 * Exercise 19 · Named constants
 *
 * Fixed values that never change are often named in UPPER_SNAKE_CASE.
 * They give meaning to "magic numbers".
 *
 * Task:
 *   1. Declare the constants SECONDS_PER_MINUTE and MINUTES_PER_HOUR.
 *   2. Declare and export `secondsPerHour`, calculated from them.
 *   3. Declare and export `secondsInThreeHours`, calculated from secondsPerHour.
 */

const SECONDS_PER_MINUTE = 60;
const MINUTES_PER_HOUR = 60;

export const secondsPerHour = SECONDS_PER_MINUTE * MINUTES_PER_HOUR;
export const secondsInThreeHours = secondsPerHour * 3;
