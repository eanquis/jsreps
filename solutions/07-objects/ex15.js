/**
 * Exercise 15 · Methods and this
 *
 * Functions stored in an object are called methods. Inside a method, `this`
 * is the object the method was called on:
 *
 *   const cat = {
 *     name: 'Tom',
 *     greet() {
 *       return `Meow, I'm ${this.name}`;
 *     },
 *   };
 *
 * Task:
 *   Add two methods to `player`:
 *   - addPoints(points): adds `points` to the score and returns the new score
 *   - describe(): returns "<name> has <score> points", e.g. "Ada has 15 points"
 *   Use `this`, so the methods keep working if the name or score changes.
 */

export const player = {
  name: 'Ada',
  score: 0,

  addPoints(points) {
    this.score += points;
    return this.score;
  },

  describe() {
    return `${this.name} has ${this.score} points`;
  },
};
