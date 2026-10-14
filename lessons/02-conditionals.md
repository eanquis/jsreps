# 02 · Conditionals

Programs make decisions: *if* the password is right, let the user in;
*otherwise*, show an error. Conditionals let your code choose what to do.

## A tiny bit about functions

From this module on, your code goes inside a **function** we give you:

```js
export function welcome(age) {
  // your code here
}
```

- `age` is a **parameter**: the input the function receives. The tests call
  `welcome(17)`, `welcome(30)` and so on, and each time `age` gets that value.
- `return` sends the answer back and ends the function right away.

```js
export function double(n) {
  return n * 2;
}
// double(4) returns 8
```

That's all you need for now. Functions get their own module later.

## Comparisons

Comparisons produce booleans:

| Operator | Meaning                  | Example     | Result  |
| -------- | ------------------------ | ----------- | ------- |
| `===`    | equal                    | `5 === 5`   | `true`  |
| `!==`    | not equal                | `5 !== 3`   | `true`  |
| `>`      | greater than             | `5 > 3`     | `true`  |
| `<`      | less than                | `5 < 3`     | `false` |
| `>=`     | greater than or equal to | `5 >= 5`    | `true`  |
| `<=`     | less than or equal to    | `4 <= 3`    | `false` |

`===` also compares types: `3 === '3'` is `false`, because one is a number and
the other is a string.

> You may see `==` and `!=`. They convert types before comparing, which causes
> surprising results (`0 == ''` is `true`!). Always use `===` and `!==`.

Watch out: `=` **assigns** a value, `===` **compares** values.

## if, else if, else

```js
if (temperature < 10) {
  label = 'cold';
} else if (temperature < 25) {
  label = 'mild';
} else {
  label = 'hot';
}
```

JavaScript checks each condition from top to bottom and runs **only the first
block whose condition is true**. `else` runs when none of them were.

Inside a function, `return` ends it right away, so you often don't need `else`:

```js
function ticketPrice(age) {
  if (age < 6) {
    return 0; // the function stops here for small children
  }
  return 12;
}
```

## The remainder operator %

`a % b` is what's left after dividing `a` by `b`:

```js
7 % 2; // 1
8 % 2; // 0, so 8 is even
9 % 3; // 0, so 9 is divisible by 3
```

## Combining conditions

| Operator | Name | True when...                    |
| -------- | ---- | ------------------------------- |
| `a && b` | AND  | both `a` and `b` are true       |
| `a \|\| b` | OR   | at least one of them is true    |
| `!a`     | NOT  | `a` is false                    |

```js
if (age >= 18 && hasTicket) { ... }
if (day === 'Saturday' || day === 'Sunday') { ... }
if (!isLoggedIn) { ... }
```

To check a range, compare both ends and join them with `&&`:

```js
if (n >= 0 && n <= 100) { ... }
```

Writing `0 <= n <= 100` doesn't work: JavaScript compares `0 <= n` first,
gets `true` or `false`, and then compares that boolean with 100.

## Truthy and falsy

`if` accepts any value. These values are **falsy**, they behave like `false`:

```js
false, 0, '', null, undefined, NaN
```

Everything else is **truthy**, including `'0'`, `'false'` and `' '` (a space).

```js
if (name) {
  // runs when name is a non-empty string
}
```

## The ternary operator

A short `if/else` that produces a value:

```js
const label = count === 1 ? 'item' : 'items';
//            condition    if true   if false
```

Use it for simple choices between two values. For anything bigger, use `if`.

## switch

`switch` compares one value against several options:

```js
switch (color) {
  case 'green':
    action = 'go';
    break;
  case 'red':
    action = 'stop';
    break;
  default:
    action = 'unknown';
}
```

- Each `case` runs until it finds a `break` (or a `return`). **Without `break`,
  the code keeps running into the next case.**
- `default` runs when no case matches.
- Cases written one after the other share the same code:

```js
switch (day) {
  case 'Saturday':
  case 'Sunday':
    return 'weekend';
}
```

## Practice

Run `npm run verify` and continue with `exercises/02-conditionals/ex01.js`.
