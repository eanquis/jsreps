# 09 · Errors

Things go wrong: users type letters where you expected numbers, files don't
exist, a value is `null` when you didn't expect it. Good programs notice
problems early, explain them clearly, and handle the ones they can.

## Reading error messages

When something goes wrong, JavaScript **throws** an error and stops. The
message tells you what happened and where:

```
TypeError: Cannot read properties of null (reading 'length')
    at countLetters (exercises/09-errors/ex03.js:12:20)
```

The first word is the **kind** of error:

| Error            | Meaning                                    | Example                    |
| ---------------- | ------------------------------------------ | -------------------------- |
| `ReferenceError` | A name that doesn't exist                  | `console.log(nope)`        |
| `TypeError`      | An operation on the wrong kind of value    | `null.length`, `x()` when `x` isn't a function |
| `RangeError`     | A number outside the allowed range         | `'ha'.repeat(-1)`          |
| `SyntaxError`    | Code (or JSON) that can't even be read     | `const 2fast = true;`      |

Read the message, then go to the file and line it points to. Most bugs are
solved right there.

## Throwing your own errors

When your function receives something it can't work with, throw an error:

```js
function withdraw(balance, amount) {
  if (amount > balance) {
    throw new Error('Insufficient funds');
  }
  return balance - amount;
}
```

`throw` stops the function immediately, like `return`, but signals a problem
to whoever called it.

Pick the error that describes the problem:

```js
throw new TypeError('n must be a number'); // wrong type
throw new RangeError('n must be between 0 and 10'); // right type, wrong value
throw new Error('Insufficient funds'); // anything else
```

Always throw `Error` objects, never plain strings: `throw 'oops'` has no
name, no message property and no stack trace.

## Guard clauses

Check for problems at the top of a function, one by one, and throw right
away. The rest of the function can then trust its inputs:

```js
function setVolume(level) {
  if (typeof level !== 'number') {
    throw new TypeError('level must be a number');
  }
  if (level < 0 || level > 10) {
    throw new RangeError('level must be between 0 and 10');
  }

  return `Volume: ${level}`;
}
```

## try / catch

`try/catch` lets you handle an error instead of crashing:

```js
try {
  const data = JSON.parse(text); // may throw a SyntaxError
  console.log(data);
} catch (error) {
  console.log(`Invalid JSON: ${error.message}`);
}
```

- If nothing in `try` throws, `catch` is skipped.
- If something throws, the rest of `try` is skipped and `catch` runs.
- The `error` object has a `name` (`'SyntaxError'`) and a `message`.

`JSON.parse(text)` turns JSON text into a value: `JSON.parse('[1,2]')` gives
`[1, 2]`. It throws a `SyntaxError` when the text is not valid JSON, which
makes it a common place to use `try/catch`.

## finally

`finally` always runs: after `try` succeeds, after `catch`, and even when the
error escapes:

```js
lock.locked = true;
try {
  return action();
} finally {
  lock.locked = false; // runs no matter what
}
```

Use it for cleanup that must always happen.

## Handle only what you expect

A `catch` that handles every error also hides bugs, like a typo in a variable
name. Handle the errors you expect and **throw the others again**:

```js
try {
  return JSON.parse(text);
} catch (error) {
  if (error instanceof SyntaxError) {
    return null; // invalid JSON: expected, handled
  }
  throw error; // anything else is a bug: let it surface
}
```

`error instanceof SyntaxError` checks whether the error is a `SyntaxError`.

## Parsing user input

What users type arrives as text. `Number(text)` converts it, and gives `NaN`
when it can't. Check with `Number.isNaN`:

```js
const age = Number(input);
if (Number.isNaN(age)) {
  throw new TypeError('Age must be a number');
}
```

Careful: `Number('')` and `Number('   ')` are `0`, not `NaN`. Check for
empty text yourself.

## Custom errors

You can create your own kinds of errors with a **class** that extends
`Error`:

```js
class ValidationError extends Error {
  constructor(message) {
    super(message); // let Error store the message
    this.name = 'ValidationError';
  }
}

throw new ValidationError('Email must contain @');
```

You don't need to know much about classes yet. Just follow this pattern: the
class name, `extends Error`, `super(message)`, and `this.name`.

Custom errors make it easy to handle exactly your own problems with
`instanceof ValidationError`.

## Throwing vs collecting

Throwing stops at the first problem. That's right for function arguments, but
in a form it's friendlier to collect every problem and show them all:

```js
const errors = [];
if (!form.username) errors.push('username is required');
if (form.password.length < 8) errors.push('password must be at least 8 characters');
return errors; // [] means everything is valid
```

## Practice

Run `npm run verify` and continue with `exercises/09-errors/ex01.js`.
