/**
 * Exercise 03 · Dynamic keys
 *
 * When the key is inside a variable, use brackets: `car[key]`.
 * `car.key` would look for a property literally called "key".
 *
 * Task:
 *   Return "<field>: <value>", where value is the property of `product`
 *   named by `field`. For example, describeField({ price: 10 }, 'price')
 *   returns "price: 10". Missing properties show as "undefined".
 */

export function describeField(product, field) {
  return `${field}: ${product[field]}`;
}
