/**
 * Exercise 16 · Fix the bug: falling through
 *
 * This function returns "stop" for almost every color.
 *
 * Task:
 *   Find out why and fix it.
 *   green → "go", yellow → "slow down", red → "stop",
 *   anything else → "invalid color".
 */

export function trafficLight(color) {
  let action;
  switch (color) {
    case 'green':
      action = 'go';
    case 'yellow':
      action = 'slow down';
    case 'red':
      action = 'stop';
      break;
    default:
      action = 'invalid color';
  }
  return action;
}
