/**
 * Exercise 10 · Nested objects
 *
 * Properties can hold other objects. Chain the dots to go deeper:
 *   order.address.city
 *
 * Task:
 *   An order looks like this:
 *   {
 *     customer: { name: 'Ada Lovelace' },
 *     address: { street: '12 Main St', city: 'London', country: 'UK' },
 *   }
 *   Return a shipping label: "Ada Lovelace, 12 Main St, London, UK".
 */

export function shippingLabel(order) {
  const { street, city, country } = order.address;
  return `${order.customer.name}, ${street}, ${city}, ${country}`;
}
