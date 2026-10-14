const coffeePrice = 4;
const croissantPrice = 3;
const coffees = 2;
const croissants = 4;
const taxRate = 0.1;

export const subtotal = coffeePrice * coffees + croissantPrice * croissants;
export const tax = subtotal * taxRate;
export const total = subtotal + tax;
export const receipt = `Subtotal: $${subtotal} | Tax: $${tax} | Total: $${total}`;
