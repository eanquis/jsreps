/**
 * Exercise 06 · Temperature stats
 *
 * Task:
 *   Return an object with statistics about a list of temperature readings:
 *   - `min`: the lowest reading
 *   - `max`: the highest reading
 *   - `average`: the average of all readings
 *   - `trend`: "rising" if the last reading is higher than the first,
 *     "falling" if it is lower, and "stable" if they are equal
 *   When there are no readings, throw an Error with the message "No readings".
 */

export function temperatureStats(readings) {
  if (readings.length === 0) {
    throw new Error('No readings');
  }

  const first = readings[0];
  const last = readings[readings.length - 1];
  let trend = 'stable';
  if (last > first) {
    trend = 'rising';
  } else if (last < first) {
    trend = 'falling';
  }

  const sum = readings.reduce((total, reading) => total + reading, 0);
  return {
    min: Math.min(...readings),
    max: Math.max(...readings),
    average: sum / readings.length,
    trend,
  };
}
