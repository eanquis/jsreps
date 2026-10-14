/**
 * Exercise 09 · includes or some?
 *
 * `.includes(value)` checks if an array contains exactly that value.
 * `.some(callback)` checks if any item matches a condition you write.
 *
 * Task:
 *   1. `hasIngredient`: return true if `ingredients` contains `name`.
 *      Use `.includes()`.
 *   2. `hasCheapItem`: return true if any item costs `maxPrice` or less.
 *      Items look like { name: 'pen', price: 2 }. Use `.some()`.
 */

export function hasIngredient(ingredients, name) {
  return ingredients.includes(name);
}

export function hasCheapItem(items, maxPrice) {
  return items.some((item) => item.price <= maxPrice);
}
