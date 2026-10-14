/**
 * Exercise 12 · Matrices
 *
 * A matrix is an array of rows, where every row has the same length:
 *
 *   [
 *     [1, 2, 3],
 *     [4, 5, 6],
 *   ]
 *
 * Task:
 *   1. `transpose(matrix)`: return a new matrix where rows become columns.
 *      transpose([[1, 2, 3], [4, 5, 6]]) → [[1, 4], [2, 5], [3, 6]]
 *   2. `rotate(matrix)`: return a new matrix rotated 90° clockwise.
 *      rotate([[1, 2], [3, 4]]) → [[3, 1], [4, 2]]
 *   Don't change the matrix you receive.
 */

export function transpose(matrix) {
  return matrix[0].map((_, column) => matrix.map((row) => row[column]));
}

export function rotate(matrix) {
  return transpose(matrix).map((row) => row.toReversed());
}
