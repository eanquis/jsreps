/**
 * Exercise 13 · Shopping cart total
 *
 * Task:
 *   `items` is an array of objects like { name: 'pen', price: 2, quantity: 3 }.
 *   Return the total cost of the cart: the sum of price × quantity of every item.
 *   An empty cart costs 0. Use a loop, not reduce.
 */

export function cartTotal(items) {
  let total = 0;
  for (const item of items) {
    total += item.price * item.quantity;
  }
  return total;
}
