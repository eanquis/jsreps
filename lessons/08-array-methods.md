# 08 · Array methods

Loops can do anything, but most loops over arrays do one of a few common
jobs: transform every item, keep some items, find one item, or combine them
all into a single value. Arrays have a **method** for each job. They make your
code shorter and say clearly *what* it does.

## Callbacks, a quick recap

All these methods receive a **callback**: a function they call once for each
item. Arrow functions keep callbacks short:

```js
const numbers = [1, 2, 3];

numbers.forEach((n) => {
  console.log(n);
});

// One expression without braces is returned automatically:
numbers.map((n) => n * 2); // [2, 4, 6]
```

With braces, you **must** write `return`:

```js
numbers.map((n) => {
  return n * 2;
}); // [2, 4, 6]

numbers.map((n) => {
  n * 2;
}); // [undefined, undefined, undefined]: nothing was returned!
```

To return an object without braces, wrap it in parentheses. Otherwise
JavaScript reads the `{` as the start of a block:

```js
names.map((name) => ({ name: name })); // ✅ [{ name: 'Ada' }, ...]
names.map((name) => { name: name }); // ❌ [undefined, ...]
```

## The methods

| Method               | Returns                                   | Example                                 |
| -------------------- | ----------------------------------------- | --------------------------------------- |
| `forEach(fn)`        | nothing                                   | `list.forEach((x) => console.log(x))`   |
| `map(fn)`            | a new array with what `fn` returned       | `[1, 2].map((n) => n * 10)` → `[10, 20]` |
| `filter(fn)`         | a new array with items where `fn` is true | `[1, 2, 3].filter((n) => n > 1)` → `[2, 3]` |
| `find(fn)`           | the first matching item, or `undefined`   | `users.find((u) => u.id === 7)`         |
| `findIndex(fn)`      | its position, or `-1`                     | `[5, -1].findIndex((n) => n < 0)` → `1` |
| `some(fn)`           | `true` if at least one item matches       | `[1, 20].some((n) => n > 10)` → `true`  |
| `every(fn)`          | `true` if all items match                 | `[1, 20].every((n) => n > 10)` → `false` |
| `includes(value)`    | `true` if that exact value is in the array | `['a', 'b'].includes('b')` → `true`    |

`map`, `filter` and the others **never change** the original array: they
build a new one.

`includes` compares values with `===`. To search with a condition (for
example, an object with a certain property), use `some`.

`every` on an empty array is `true`: no item broke the rule.

## reduce

`reduce` combines all items into **one value**. The callback receives the
value accumulated so far and the current item, and returns the new
accumulated value. The second argument is the starting value:

```js
[1, 2, 3].reduce((sum, n) => sum + n, 0); // 6
//                                      ^ starting value
// step 1: sum = 0, n = 1 → 1
// step 2: sum = 1, n = 2 → 3
// step 3: sum = 3, n = 3 → 6
```

The accumulated value can be anything, even an object:

```js
['a', 'b', 'a'].reduce((counts, letter) => {
  counts[letter] = (counts[letter] ?? 0) + 1;
  return counts;
}, {}); // { a: 2, b: 1 }
```

Always give `reduce` a starting value, unless you're sure the array is never
empty.

## Sorting

`sort` has two surprises:

1. Without a comparator, it sorts items **as strings**:
   `[10, 9, 1].sort()` gives `[1, 10, 9]`, because `'10'` comes before `'9'`.
2. It **changes the original array**.

Give it a comparator: a function that receives two items `a` and `b` and
returns a negative number to put `a` first, a positive number to put `b`
first, or `0` to keep their order:

```js
numbers.sort((a, b) => a - b); // smallest first
numbers.sort((a, b) => b - a); // largest first
people.sort((a, b) => a.age - b.age); // youngest first
```

To keep the original array untouched, use `toSorted`, which returns a sorted
copy, or sort a copy:

```js
const sorted = numbers.toSorted((a, b) => a - b);
const alsoSorted = [...numbers].sort((a, b) => a - b);
```

`toReversed` works the same way: it returns a reversed copy, while `reverse`
changes the original array.

To sort strings alphabetically in a comparator, use `localeCompare`. It
returns a negative number, a positive number or `0`, exactly what `sort`
expects:

```js
names.toSorted((a, b) => a.localeCompare(b)); // A to Z
people.toSorted((a, b) => a.name.localeCompare(b.name));
```

To sort by one property and break ties with another, combine them with `||`.
When the first difference is `0` (a tie), `||` moves on to the second one:

```js
players.toSorted((a, b) => b.score - a.score || a.name.localeCompare(b.name));
```

## flat and flatMap

```js
[[1, 2], [3], []].flat(); // [1, 2, 3]

posts.flatMap((post) => post.tags); // all tags of all posts, in one array
```

`flatMap(fn)` is the same as `map(fn).flat()`.

## Chaining

Each method returns a new array, so you can call the next method right away:

```js
const total = cart
  .filter((item) => item.inStock) // keep what's available
  .map((item) => item.price * item.quantity) // price of each line
  .reduce((sum, price) => sum + price, 0); // add them up
```

Read it from top to bottom, like a recipe.

## Practice

Run `npm run verify` and continue with `exercises/08-array-methods/ex01.js`.
