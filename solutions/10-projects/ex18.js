/**
 * Exercise 18 · Calculator
 *
 * Task:
 *   Calculate the result of an expression with whole numbers, + and *,
 *   like "3 + 4 * 2". Numbers and operators are separated by single spaces.
 *   - Multiplication comes before addition: "3 + 4 * 2" is 3 + 8 = 11.
 *   - An expression can be a single number: "7" is 7.
 *   - Throw an Error with the message "Invalid expression" when the
 *     expression is empty or contains something that is not a number,
 *     "+" or "*" (like "2 - 1" or "two + 2").
 */

function isDigit(char) {
  return char >= '0' && char <= '9';
}

function toNumber(token) {
  if (token === '' || !token.split('').every(isDigit)) {
    throw new Error('Invalid expression');
  }
  return Number(token);
}

export function calculate(expression) {
  let sum = 0;
  for (const term of expression.split(' + ')) {
    let product = 1;
    for (const factor of term.split(' * ')) {
      product *= toNumber(factor);
    }
    sum += product;
  }
  return sum;
}
