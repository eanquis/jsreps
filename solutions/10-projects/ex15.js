/**
 * Exercise 15 · Leaderboard
 *
 * Task:
 *   Receive an array of players like { name: 'Ada', score: 30 } and return
 *   the leaderboard as an array of strings in the format "1. Ada (30)".
 *   - Higher scores come first.
 *   - Players with the same score are ordered alphabetically by name.
 *   - Positions are 1, 2, 3, ... in the final order.
 *   Don't change the array you receive.
 */

export function leaderboard(players) {
  return players
    .toSorted((a, b) => b.score - a.score || a.name.localeCompare(b.name))
    .map((player, index) => `${index + 1}. ${player.name} (${player.score})`);
}
