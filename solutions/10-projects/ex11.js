/**
 * Exercise 11 · Tic-tac-toe
 *
 * A tic-tac-toe board is an array of 3 rows, each with 3 cells.
 * Each cell is 'X', 'O' or '' (empty):
 *
 *   [
 *     ['X', 'O', ''],
 *     ['', 'X', 'O'],
 *     ['', '', 'X'],
 *   ]
 *
 * Task:
 *   Return the state of the game:
 *   - 'X' or 'O' when that player has three in a row
 *     (a row, a column or a diagonal)
 *   - 'draw' when the board is full and nobody won
 *   - null when the game isn't over yet
 */

const LINES = [
  [[0, 0], [0, 1], [0, 2]],
  [[1, 0], [1, 1], [1, 2]],
  [[2, 0], [2, 1], [2, 2]],
  [[0, 0], [1, 0], [2, 0]],
  [[0, 1], [1, 1], [2, 1]],
  [[0, 2], [1, 2], [2, 2]],
  [[0, 0], [1, 1], [2, 2]],
  [[0, 2], [1, 1], [2, 0]],
];

export function winner(board) {
  for (const line of LINES) {
    const [a, b, c] = line.map(([row, column]) => board[row][column]);
    if (a !== '' && a === b && b === c) {
      return a;
    }
  }
  const isFull = board.every((row) => row.every((cell) => cell !== ''));
  return isFull ? 'draw' : null;
}
