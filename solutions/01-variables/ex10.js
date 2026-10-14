/**
 * Exercise 10 · Joining strings with +
 *
 * The + operator also joins strings: 'a' + 'b' is 'ab'.
 *
 * Task:
 *   Declare and export a constant `place` with the city and the country
 *   separated by a comma and a space, like "City, Country".
 *   Use + to join them (no template literals this time).
 */

const city = 'Lisbon';
const country = 'Portugal';

export const place = city + ', ' + country;
