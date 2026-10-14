# 10 · Projects

You've learned the building blocks. This module has no new syntax: it's about
**putting the pieces together** to solve bigger problems, the way real
programs are written.

## What you already know

| Module              | You learned to...                                                    |
| ------------------- | -------------------------------------------------------------------- |
| 01 · Variables      | store values with `const` and `let`, and work with types             |
| 02 · Conditionals   | make decisions with `if`, `else`, `switch`, `&&`, `\|\|` and `!`      |
| 03 · Loops          | repeat work with `while` and `for`, and accumulate results           |
| 04 · Strings        | slice, search and transform text                                     |
| 05 · Arrays         | keep lists of values and walk through them                           |
| 06 · Functions      | package logic into reusable pieces with parameters and `return`      |
| 07 · Objects        | group related data under named keys                                  |
| 08 · Array methods  | transform lists with `map`, `filter`, `reduce`, `sort` and friends   |
| 09 · Errors         | `throw` errors for invalid input and handle them with `try/catch`    |

## How to approach a bigger problem

### 1. Read the task twice

Before writing any code, make sure you know:

- **What goes in?** The parameters: their types and possible values.
- **What comes out?** The return value: its type and its exact format.
- **What are the special cases?** Empty input, ties, invalid values, limits.

### 2. Work through examples by hand

Pick a small input and solve it on paper. For the leaderboard:

```
players: Zoe 20, Bob 20, Ann 5
sorted:  Bob 20, Zoe 20 (tie → alphabetical), Ann 5
result:  '1. Bob (20)', '2. Zoe (20)', '3. Ann (5)'
```

If you can't solve it by hand, you can't tell the computer how to do it.

### 3. Break it into small steps

Most problems are a sequence of small steps you already know how to do.
"Check if a sentence is a palindrome" becomes:

1. Lowercase the text.
2. Keep only letters and digits.
3. Reverse it.
4. Compare with the original.

Each step is a few lines. When a step gets big, give it its own function:

```js
function cleanText(text) { ... }
function reverse(text) { ... }

export function isPalindromeSentence(text) {
  const clean = cleanText(text);
  return clean === reverse(clean);
}
```

### 4. Test one step at a time

Don't write everything and hope it works. Write one step, check it with
`console.log`, then move on:

```js
const clean = cleanText('A man, a plan!');
console.log(clean); // 'amanaplan' ✔
```

`npm run watch` shows which tests pass as you go. The test names tell you
which behavior is still missing.

### 5. Make it work, then make it clean

Once the tests pass, read your code again:

- Are the names clear? Would a friend understand them?
- Is there repeated code that could become a function?
- Is there a simpler way, like an array method instead of a loop?

The tests keep passing while you improve the code, so refactoring is safe.

## Objects with private state

Some exercises ask for a function that returns an object with methods, like
a bank account. Variables declared inside the outer function are shared by
the methods, but nobody outside can touch them:

```js
export function createCounter() {
  let count = 0; // private: only the methods below can see it

  return {
    increment() {
      count++;
    },
    value() {
      return count;
    },
  };
}

const counter = createCounter();
counter.increment();
counter.value(); // 1
```

Every call to `createCounter()` creates a new, independent `count`.

## Practice

Run `npm run verify` and continue with `exercises/10-projects/ex01.js`.
Take your time: these exercises are bigger, and that's the point.
