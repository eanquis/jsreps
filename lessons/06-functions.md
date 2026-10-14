# 06 · Functions

You've been writing code inside functions since module 02. Now it's time to
understand them properly: how to create them, how they receive and return
values, and some of the powerful things they can do.

A **function** is a named block of code that you can run whenever you want,
as many times as you want. Functions let you give a name to an idea
(`calculateTax`, `isValidEmail`) and reuse it.

## Declaring and calling

```js
function greet(name) {
  return `Hello, ${name}!`;
}

greet('Ada'); // 'Hello, Ada!'
greet('Grace'); // 'Hello, Grace!'
```

- `name` is a **parameter**: a variable that exists only inside the function.
- `'Ada'` is an **argument**: the value passed when the function is called.
- The parentheses `()` **call** the function. Without them, `greet` is just
  the function itself, a value like any other.

## return

`return` sends a value back to whoever called the function, and **ends the
function immediately**:

```js
function check(n) {
  if (n < 0) {
    return 'negative'; // the function stops here for negative numbers
  }
  return 'not negative';
}
```

A function that never reaches a `return` gives back `undefined`.

`console.log` is **not** the same as `return`. It only prints a value on the
screen. The code that called the function receives nothing:

```js
function badDouble(n) {
  console.log(n * 2); // prints 8...
}
const result = badDouble(4); // ...but result is undefined
```

## Early return (guard clauses)

Handle special cases first and return right away. The rest of the function
can then focus on the normal case, without `else`:

```js
function safeDivide(a, b) {
  if (b === 0) {
    return null;
  }
  return a / b;
}
```

## Default parameters

A parameter can have a default value, used when no argument is given (or
when the argument is `undefined`):

```js
function greet(name = 'friend') {
  return `Hello, ${name}!`;
}

greet(); // 'Hello, friend!'
```

## Rest parameters

`...name` collects all the remaining arguments into an array:

```js
function countArgs(...values) {
  return values.length;
}

countArgs(1, 2, 3); // 3
countArgs(); // 0
```

## Function expressions and arrow functions

Functions are values, so they can be stored in variables:

```js
const triple = function (n) {
  return n * 3;
};
```

**Arrow functions** are a shorter way to write the same thing:

```js
const triple = (n) => {
  return n * 3;
};

// When the body is a single expression, drop the braces and the return:
const triple = (n) => n * 3;
const add = (a, b) => a + b;
const sayHi = () => 'Hi!';
```

## Scope

Variables declared inside a function only exist inside it. A variable with the
same name inside a function is a **different variable** from the one outside:

```js
let count = 0;

function addTen() {
  let count = 10; // a new variable, only inside addTen
  return count + 1;
}

addTen(); // 11
count; // still 0
```

But a function that *doesn't* declare its own variable uses the one outside,
and can change it.

## Pure functions

A **pure function**:

- depends only on its parameters, and
- doesn't change anything outside itself.

The same input always gives the same output, which makes pure functions easy
to test and to trust. Prefer them whenever you can.

```js
// ❌ impure: depends on and changes an outer variable
let total = 0;
function addToTotal(n) {
  total += n;
  return total;
}

// ✅ pure
function add(a, b) {
  return a + b;
}
```

## Functions calling functions

Small functions can be combined to build bigger ones:

```js
const square = (n) => n * n;
const sumOfSquares = (a, b) => square(a) + square(b);
```

## Functions as values

You can pass a function as an argument to another function:

```js
function applyToFive(fn) {
  return fn(5);
}

applyToFive((n) => n + 1); // 6
applyToFive((n) => n * 10); // 50
```

This idea is everywhere in JavaScript, and module 08 is all about it.

## Closures

A function created inside another function **remembers** the variables
around it, even after the outer function has finished:

```js
function makeGreeter(greeting) {
  return (name) => `${greeting}, ${name}!`;
}

const hello = makeGreeter('Hello');
const hi = makeGreeter('Hi');

hello('Ada'); // 'Hello, Ada!'
hi('Ada'); // 'Hi, Ada!'
```

Each call to `makeGreeter` creates a new function with its own `greeting`.

## Recursion

A **recursive** function calls itself, each time with a smaller problem, until
it reaches a case simple enough to answer directly (the **base case**):

```js
function sumUpTo(n) {
  if (n === 0) {
    return 0; // base case: stops the recursion
  }
  return n + sumUpTo(n - 1);
}

sumUpTo(3); // 3 + 2 + 1 + 0 = 6
```

Without a base case, the function would call itself forever and crash.

## Practice

Run `npm run verify` and continue with `exercises/06-functions/ex01.js`.
