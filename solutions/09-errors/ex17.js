/**
 * Exercise 17 · Predict: try, catch and finally
 *
 * Task:
 *   Without running any code, write the content of `log` after each snippet.
 *   Write your answers as arrays of strings.
 *
 *   Snippet 1:
 *     const log = [];
 *     try {
 *       log.push('a');
 *       throw new Error('oops');
 *       log.push('b');
 *     } catch (error) {
 *       log.push('c');
 *     } finally {
 *       log.push('d');
 *     }
 *
 *   Snippet 2: the same code, without the `throw` line.
 *
 *   Snippet 3:
 *     const log = [];
 *     try {
 *       log.push('start');
 *       JSON.parse('{oops}');
 *     } catch (error) {
 *       log.push(error.name);
 *     }
 *     log.push('end');
 */

export const answer1 = ['a', 'c', 'd'];
export const answer2 = ['a', 'b', 'd'];
export const answer3 = ['start', 'SyntaxError', 'end'];
