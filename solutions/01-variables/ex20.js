/**
 * Exercise 20 · Challenge: the receipt
 *
 * Task:
 *   Declare and export:
 *   - `subtotal`: the cost of all coffees and croissants
 *   - `tax`: the subtotal multiplied by the tax rate
 *   - `total`: the subtotal plus the tax
 *   - `receipt`: a string in the format below, built from the variables:
 *       Subtotal: $<subtotal> | Tax: $<tax> | Total: $<total>
 *
 *   Calculate everything from the variables below.
 */

const coffeePrice = 4;
const croissantPrice = 3;
const coffees = 2;
const croissants = 4;
const taxRate = 0.1;

export const subtotal = coffeePrice * coffees + croissantPrice * croissants;
export const tax = subtotal * taxRate;
export const total = subtotal + tax;
export const receipt = `Subtotal: $${subtotal} | Tax: $${tax} | Total: $${total}`;
