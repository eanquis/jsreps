# 01 · Variables

A program works with data: names, prices, scores, answers. A **variable** is a
name that points to a piece of data, so you can use it and change it later.

## Declaring variables

```js
const name = 'Ada';
let score = 0;
```

- `const` declares a variable that can **never be reassigned**.
- `let` declares a variable that **can be reassigned** later.

```js
let score = 0;
score = 10; // ✅ fine

const name = 'Ada';
name = 'Grace'; // 💥 TypeError: Assignment to constant variable.
```

Prefer `const`. Use `let` only when the value really needs to change.

> You may see `var` in old code. It is the old way of declaring variables and
> has confusing rules. Don't use it.

## Types of values

| Type        | Examples                    | Notes                               |
| ----------- | --------------------------- | ----------------------------------- |
| `string`    | `'hello'`, `"hi"`, `` `yo` `` | Text, always between quotes         |
| `number`    | `42`, `-7`, `3.14`          | No quotes                           |
| `boolean`   | `true`, `false`             | Yes or no                           |
| `undefined` | `undefined`                 | "No value was given"                |
| `null`      | `null`                      | "Intentionally empty"               |

`typeof` tells you the type of a value:

```js
typeof 42; // 'number'
typeof '42'; // 'string' (quotes make it text!)
```

## Naming variables

- Use **camelCase**: `firstName`, `totalPrice`, `isLoggedIn`.
- Names can contain letters, digits, `_` and `$`, but can't start with a digit.
- Names can't be reserved words like `let`, `new`, `class` or `if`.
- Booleans usually start with `is` or `has`: `isOpen`, `hasTicket`.
- Fixed values that never change are often written in `UPPER_SNAKE_CASE`:
  `MAX_PLAYERS`, `SECONDS_PER_MINUTE`.

Good names explain the data. `x` says nothing, `daysUntilDeadline` says everything.

## Changing values

```js
let points = 10;
points = points + 5; // 15
points += 5; // 20, shortcut for points = points + 5
points -= 2; // 18
points *= 2; // 36
points /= 4; // 9
points++; // 10, adds 1
points--; // 9, subtracts 1
```

## Combining strings

```js
const first = 'Ada';
const last = 'Lovelace';

const withPlus = first + ' ' + last; // 'Ada Lovelace'
const withTemplate = `${first} ${last}`; // 'Ada Lovelace'
```

Strings written with backticks (`` ` ``) are **template literals**: anything
inside `${...}` is replaced by its value.

## Strings vs numbers

`+` adds numbers, but joins strings. If either side is a string, it joins:

```js
5 + 3; // 8
'5' + 3; // '53'
'5' - 3; // 2 (- only works with numbers, so '5' becomes 5)
```

What a user types always arrives as a string. Convert it with `Number()`:

```js
const input = '42';
const age = Number(input); // 42
```

## Scope

A variable declared with `let` or `const` only exists inside the `{ block }`
where it was declared:

```js
if (true) {
  const secret = 'shh';
}
console.log(secret); // 💥 ReferenceError: secret is not defined
```

To use it outside, declare it outside:

```js
let mood = 'calm';
if (true) {
  mood = 'happy'; // changes the variable declared above
}
console.log(mood); // 'happy'
```

## About `export`

In jsreps, every exercise is a file, and the tests need to see your
variables. Writing `export` before a declaration makes that possible:

```js
export const answer = 42;
```

You'll learn more about modules later. For now: if the task says *export*,
put `export` in front.

## Practice

Run `npm run verify` and start with `exercises/01-variables/ex01.js`.
