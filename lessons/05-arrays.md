# 05 · Arrays

So far each variable held one value. An **array** holds a whole list of
values, in order: a shopping list, the scores of a game, the rows of a board.

## Creating arrays

```js
const fruits = ['apple', 'banana', 'cherry'];
const scores = [90, 75, 100];
const empty = [];
const mixed = ['text', 42, true]; // possible, but usually a list holds one kind of thing
```

## Indexes and length

Every item has a position called its **index**. Indexes start at **0**:

```js
const letters = ['a', 'b', 'c'];
letters[0]; // 'a'
letters[2]; // 'c'
letters[3]; // undefined: there is nothing there
letters.length; // 3
```

The last item is always at `length - 1`:

```js
letters[letters.length - 1]; // 'c'
letters.at(-1); // 'c', the modern shortcut
```

You can change an item by assigning to its index:

```js
letters[0] = 'z'; // ['z', 'b', 'c']
```

## Adding and removing at the ends

| Method          | What it does                     | Returns              |
| --------------- | -------------------------------- | -------------------- |
| `push(item)`    | adds to the end                  | the new length       |
| `pop()`         | removes the last item            | the removed item     |
| `unshift(item)` | adds to the start                | the new length       |
| `shift()`       | removes the first item           | the removed item     |

```js
const queue = ['Ana', 'Bruno'];
queue.push('Carla'); // ['Ana', 'Bruno', 'Carla']
const served = queue.shift(); // 'Ana', and queue is ['Bruno', 'Carla']
```

These methods **change the array itself**. That's why a `const` array can
still change: `const` only stops the variable from pointing to another array.

## Searching

```js
const guests = ['Ada', 'Grace'];
guests.includes('Ada'); // true
guests.indexOf('Grace'); // 1
guests.indexOf('Bob'); // -1, not found
```

## Looping over arrays

With a classic `for`, when you need the index:

```js
for (let i = 0; i < scores.length; i++) {
  console.log(i, scores[i]);
}
```

With `for...of`, when you only need the items:

```js
for (const score of scores) {
  console.log(score);
}
```

Many problems follow the same pattern: start with a value, then update it
inside the loop.

```js
let total = 0; // sum
for (const score of scores) {
  total += score;
}

const passed = []; // building a new array
for (const score of scores) {
  if (score >= 80) {
    passed.push(score);
  }
}
```

## Is it an array?

Strings also have `length` and indexes, so they can look like arrays.
`Array.isArray(value)` tells them apart:

```js
Array.isArray([1, 2]); // true
Array.isArray('12'); // false
```

## Slicing, splitting and joining

`slice(start, end)` returns a **new** array, from `start` up to (but not
including) `end`. Without `end`, it goes to the end of the array:

```js
const letters = ['a', 'b', 'c', 'd', 'e'];
letters.slice(1, 3); // ['b', 'c']
letters.slice(2); // ['c', 'd', 'e']
letters.slice(); // a copy of the whole array
```

`splice(start, count)` **removes** items from the array itself:

```js
letters.splice(1, 2); // removes 'b' and 'c' from letters
```

`split` turns a string into an array, and `join` does the opposite:

```js
'red,green,blue'.split(','); // ['red', 'green', 'blue']
['red', 'green', 'blue'].join(' + '); // 'red + green + blue'
```

## Spread

`...list` unpacks the items of an array inside another one:

```js
const a = [1, 2];
const b = [3, 4];
const both = [...a, ...b]; // [1, 2, 3, 4]
const copy = [...a]; // a new array with the same items
```

## References: the most common array bug

A variable doesn't hold the array itself, only a **reference** to it.
Assigning an array to another variable doesn't copy it:

```js
const original = [1, 2, 3];
const sameArray = original; // both point to the SAME array
sameArray.push(4);
original; // [1, 2, 3, 4] 😱

const copy = [...original]; // a NEW array
copy.push(5);
original; // still [1, 2, 3, 4]
```

The same happens with function parameters: if a function changes the array
it received, the caller's array changes too. Unless the task says otherwise,
**don't change the arrays your functions receive**: copy them first.

`===` compares references, not contents: `[1] === [1]` is `false`, because
they are two different arrays.

## Grids: arrays of arrays

An array can hold other arrays. A grid is a list of rows:

```js
const board = [
  ['X', 'O', 'X'],
  ['', 'X', 'O'],
  ['O', '', 'X'],
];
board[1][2]; // row 1, column 2 → 'O'
```

To visit every cell, use a loop inside a loop:

```js
for (const row of board) {
  for (const cell of row) {
    console.log(cell);
  }
}
```

## Practice

Run `npm run verify` and continue with `exercises/05-arrays/ex01.js`.
