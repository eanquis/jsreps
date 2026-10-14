/**
 * Exercise 11 · Missing data
 *
 * Reading a property of undefined crashes. Optional chaining `?.` stops and
 * returns undefined instead:
 *   user.address?.city
 * The nullish operator `??` gives a fallback when a value is null or undefined:
 *   name ?? 'Anonymous'
 *
 * Task:
 *   Return the city of the user's address, or "Unknown" when the user has no
 *   address or the address has no city. Use ?. and ??.
 */

export function getCity(user) {
  return user.address?.city ?? 'Unknown';
}
