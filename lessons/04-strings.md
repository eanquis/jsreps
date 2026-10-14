# 04 · Strings

Text is everywhere: names, emails, messages, file names. In JavaScript, text
is a **string**, and strings come with many tools to inspect and transform it.

## Length and positions

```js
const word = 'hello';

word.length; // 5
word[0]; // 'h' (positions start at 0)
word[4]; // 'o'
word[word.length - 1]; // 'o', the last character
word.at(-1); // 'o', a shorter way to get the last character
word[10]; // undefined, there's nothing there
```

Positions (also called **indexes**) go from `0` to `length - 1`.

## Strings can't change

You can read a character with `word[0]`, but you can't change it:

```js
const word = 'hello';
word[0] = 'H'; // 💥 TypeError: Cannot assign to read only property '0'
```

Every string method returns a **new** string and leaves the original alone:

```js
let name = 'ada';
name.toUpperCase(); // returns 'ADA'...
name; // ...but name is still 'ada'

name = name.toUpperCase(); // to keep the result, store it
```

## Methods

A **method** is a function that belongs to a value. You call it with a dot:
`text.method()`.

### Changing case and cleaning up

```js
'Hello'.toUpperCase(); // 'HELLO'
'Hello'.toLowerCase(); // 'hello'
'  hi  '.trim(); // 'hi' (removes spaces, tabs and line breaks at both ends)
```

To compare texts ignoring case, convert both to the same case first:

```js
'Hello'.toLowerCase() === 'HELLO'.toLowerCase(); // true
```

### Searching

```js
const text = 'JavaScript is fun';

text.includes('fun'); // true
text.startsWith('Java'); // true
text.endsWith('!'); // false
text.indexOf('a'); // 1, the position of the first 'a'
text.indexOf('z'); // -1, not found
```

### Cutting and replacing

```js
const text = 'JavaScript';

text.slice(0, 4); // 'Java' (from position 0 up to, but not including, 4)
text.slice(4); // 'Script' (from 4 to the end)
text.slice(-3); // 'ipt' (negative positions count from the end)

'a-b-c'.replace('-', '+'); // 'a+b-c' (only the first)
'a-b-c'.replaceAll('-', '+'); // 'a+b+c' (all of them)
```

### Building

```js
'ab'.repeat(3); // 'ababab'
'7'.padStart(3, '0'); // '007'
String(7).padStart(2, '0'); // '07' (padStart only works on strings)
```

Methods can be chained, each one working on the result of the previous one:

```js
'  Hello World  '.trim().toLowerCase(); // 'hello world'
```

## Looping over characters

With `for...of`, you get each character in order:

```js
for (const char of 'abc') {
  // 'a', then 'b', then 'c'
}
```

With a classic `for`, you get the position too:

```js
const word = 'abc';
for (let i = 0; i < word.length; i++) {
  word[i]; // 'a', then 'b', then 'c'
}
```

Going backwards, start at the **last position**, `length - 1`, not at `length`:

```js
for (let i = word.length - 1; i >= 0; i--) {
  word[i]; // 'c', then 'b', then 'a'
}
```

A common pattern is to **build** a new string inside a loop:

```js
let result = '';
for (const char of 'abc') {
  result += char.toUpperCase();
}
result; // 'ABC'
```

## Practice

Run `npm run verify` and continue with `exercises/04-strings/ex01.js`.
