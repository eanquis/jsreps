/**
 * Exercise 20 · Final challenge: shopping cart
 *
 * Task:
 *   `createCart()` returns an object with these methods:
 *   - `addItem(name, price, quantity)`: adds an item. `quantity` is optional
 *     and defaults to 1. Adding an item that is already in the cart increases
 *     its quantity.
 *   - `removeItem(name)`: removes the item completely. Throws an Error with
 *     the message "Item not in cart" if it isn't there.
 *   - `itemCount()`: the total quantity of items (2 apples + 1 pear = 3).
 *   - `applyDiscount(code)`: applies a discount code to the whole cart:
 *     "SAVE10" gives 10% off and "HALF" gives 50% off. Applying a new code
 *     replaces the previous one. Unknown codes throw an Error with the
 *     message "Invalid discount code".
 *   - `total()`: the sum of price * quantity of every item, minus the discount.
 */

const DISCOUNTS = { SAVE10: 0.1, HALF: 0.5 };

export function createCart() {
  const items = {};
  let discount = 0;

  return {
    addItem(name, price, quantity = 1) {
      if (name in items) {
        items[name].quantity += quantity;
      } else {
        items[name] = { price, quantity };
      }
    },
    removeItem(name) {
      if (!(name in items)) {
        throw new Error('Item not in cart');
      }
      delete items[name];
    },
    itemCount() {
      return Object.values(items).reduce((count, item) => count + item.quantity, 0);
    },
    applyDiscount(code) {
      if (!(code in DISCOUNTS)) {
        throw new Error('Invalid discount code');
      }
      discount = DISCOUNTS[code];
    },
    total() {
      const subtotal = Object.values(items).reduce(
        (sum, item) => sum + item.price * item.quantity,
        0,
      );
      return subtotal * (1 - discount);
    },
  };
}
