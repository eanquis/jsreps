/**
 * Exercise 20 · Challenge: tic-tac-toe
 *
 * The board is a 3×3 grid. Each cell is "X", "O" or "" (empty):
 *
 *   [
 *     ['X', 'O', ''],
 *     ['X', 'O', ''],
 *     ['X', '', ''],
 *   ]
 *
 * Task:
 *   Return "X" or "O" when that player has three in a row: in a row, in a
 *   column or in a diagonal. Return null when nobody has won.
 */

export function winner(board) {
  const lines = [];
  for (let i = 0; i < 3; i++) {
    lines.push([board[i][0], board[i][1], board[i][2]]);
    lines.push([board[0][i], board[1][i], board[2][i]]);
  }
  lines.push([board[0][0], board[1][1], board[2][2]]);
  lines.push([board[0][2], board[1][1], board[2][0]]);

  for (const line of lines) {
    if (line[0] !== '' && line[0] === line[1] && line[1] === line[2]) {
      return line[0];
    }
  }
  return null;
}
