/**
 * Exercise 12 · Searching a list of objects
 *
 * Task:
 *   `products` is an array of objects like { name: 'pen', price: 2 }.
 *   Return the product whose name is `name`, or null when there is none.
 *   Use a loop. Don't use array methods like find or filter.
 */

export function findProduct(products, name) {
  for (const product of products) {
    if (product.name === name) {
      return product;
    }
  }
  return null;
}
