/**
 * Exercise 09 · Run-length encoding
 *
 * Run-length encoding compresses text by replacing repeated characters with
 * a count: "aaabcc" becomes "3a1b2c".
 *
 * Task:
 *   1. `encode(text)`: return the encoded text.
 *      encode('aaabcc') → '3a1b2c'
 *   2. `decode(encoded)`: do the opposite. Counts can have several digits.
 *      decode('12x1y') → 'xxxxxxxxxxxxy'
 *   The text only contains letters. Empty strings stay empty.
 */

export function encode(text) {
  let result = '';
  let count = 1;
  for (let i = 0; i < text.length; i++) {
    if (text[i] === text[i + 1]) {
      count++;
    } else {
      result += `${count}${text[i]}`;
      count = 1;
    }
  }
  return result;
}

export function decode(encoded) {
  let result = '';
  let digits = '';
  for (const char of encoded) {
    if (char >= '0' && char <= '9') {
      digits += char;
    } else {
      result += char.repeat(Number(digits));
      digits = '';
    }
  }
  return result;
}
