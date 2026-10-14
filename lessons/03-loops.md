# 03 · Loops

Computers are great at repeating things. A **loop** runs the same block of
code again and again, as long as a condition is true.

## while

```js
let i = 1;
while (i <= 3) {
  // runs 3 times, with i = 1, 2, 3
  i++;
}
```

Each round, JavaScript checks the condition. If it's true, the block runs and
the condition is checked again. When it's false, the loop ends and the code
after it runs.

Something inside the loop must eventually make the condition false. If
nothing changes, the loop never ends: that's an **infinite loop**, and your
program freezes.

```js
let i = 1;
while (i <= 3) {
  // 💥 i never changes, so this runs forever
}
```

## for

`for` puts the three parts of a counting loop on one line:

```js
for (let i = 1; i <= 3; i++) {
  //   start;  keep going while; after each round
}
```

1. `let i = 1` runs once, before the loop starts.
2. `i <= 3` is checked before every round.
3. `i++` runs after every round.

Use `for` when you know how many times to repeat, and `while` when you repeat
until something happens.

Loops can count down, or by steps other than 1:

```js
for (let i = 10; i >= 1; i--) { ... } // 10, 9, ..., 1
for (let i = 0; i <= 10; i += 2) { ... } // 0, 2, 4, 6, 8, 10
```

## Off by one

The most common loop bug is running one time too many or one time too few.
Check your limits:

```js
for (let i = 1; i < 5; i++) // 1, 2, 3, 4    (4 rounds)
for (let i = 1; i <= 5; i++) // 1, 2, 3, 4, 5 (5 rounds)
for (let i = 0; i < 5; i++) // 0, 1, 2, 3, 4 (5 rounds)
```

When in doubt, test the smallest cases by hand: what happens with 0? With 1?

## Accumulators

To add up values, create a variable **before** the loop and update it
**inside**:

```js
let total = 0; // created once
for (let i = 1; i <= 4; i++) {
  total += i; // updated every round
}
// total is 10
```

If you declare the accumulator inside the loop, it starts over every round,
and it doesn't exist after the loop.

For multiplication, start at 1 instead of 0: anything times 0 is 0.

Strings work too:

```js
let text = '';
for (let i = 1; i <= 3; i++) {
  text += `${i} `;
}
// text is '1 2 3 '
```

## break and continue

`break` ends the loop immediately. `continue` skips the rest of the current
round and moves to the next one.

```js
for (let i = 1; i <= 10; i++) {
  if (i === 3) continue; // skips 3
  if (i === 6) break; // stops at 6
  // runs with i = 1, 2, 4, 5
}
```

A `while (true)` loop only ends with `break` (or `return`):

```js
while (true) {
  if (found) break;
}
```

## do...while

Runs the block first and checks the condition after, so it always runs at
least once:

```js
let attempts = 0;
do {
  attempts++;
} while (attempts < 3);
```

## Nested loops

A loop can contain another loop. For each round of the outer loop, the inner
loop runs from start to end:

```js
let text = '';
for (let line = 1; line <= 2; line++) {
  for (let column = 1; column <= 3; column++) {
    text += '*';
  }
  text += '\n';
}
// text is '***\n***\n'
```

In a string, `\n` is a line break.

## Taking numbers apart

Two tricks to go through the digits of a number:

```js
1234 % 10; // 4: the last digit
Math.floor(1234 / 10); // 123: the number without its last digit
```

`Math.floor(x)` rounds a number down to a whole number:
`Math.floor(4.9)` is 4.

## Practice

Run `npm run verify` and continue with `exercises/03-loops/ex01.js`.
