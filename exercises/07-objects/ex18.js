/**
 * Exercise 18 · Fix the bug: changing what you received
 *
 * This function returns the right price, but it has a side effect: after
 * calling it, the original product has changed too. In a shop, applying a
 * discount twice to the same product would give the wrong price.
 *
 * Task:
 *   Return a new product with the discounted price, and leave the original
 *   product untouched.
 */

export function applyDiscount(product, percent) {
  product.price = product.price - (product.price * percent) / 100;
  return product;
}
