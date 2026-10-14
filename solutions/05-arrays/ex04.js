/**
 * Exercise 04 · Adding and removing at the ends
 *
 * - push(item) adds to the end, pop() removes from the end
 * - unshift(item) adds to the start, shift() removes from the start
 * pop() and shift() return the item they removed.
 *
 * Task:
 *   Change `playlist` step by step, one line per step:
 *   1. Add "Chorus" to the end.
 *   2. Add "Warm-up" to the start.
 *   3. Remove the last song and store it in `lastRemoved`.
 *   4. Remove the first song and store it in `firstRemoved`.
 */

export const playlist = ['Intro', 'Verse'];
export let lastRemoved;
export let firstRemoved;

playlist.push('Chorus');
playlist.unshift('Warm-up');
lastRemoved = playlist.pop();
firstRemoved = playlist.shift();
