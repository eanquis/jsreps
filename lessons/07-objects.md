# 07 · Objects

Arrays keep values in order. **Objects** keep values by name. A user, a
product, an order: anything with named parts fits naturally in an object.

## Creating objects

```js
const user = {
  name: 'Ada',
  age: 36,
  isAdmin: false,
};
```

Each `key: value` pair is a **property**. Values can be anything: numbers,
strings, arrays, other objects, even functions.

When a variable has the same name as the key, you can use the **shorthand**:

```js
const name = 'Ada';
const age = 36;
const user = { name, age }; // same as { name: name, age: age }
```

## Reading properties

```js
user.name; // 'Ada'      dot notation
user['name']; // 'Ada'   bracket notation
user.email; // undefined, the property doesn't exist
```

Use dots most of the time. Use **brackets when the key is in a variable**:

```js
const field = 'age';
user[field]; // 36
user.field; // undefined: looks for a property literally called "field"
```

## Adding, changing and removing

```js
user.email = 'ada@example.com'; // adds a new property
user.age = 37; // changes an existing one
delete user.isAdmin; // removes it
```

Even with `const`, you can change the properties of an object. `const` only
stops the variable from pointing to a *different* object.

## Does a key exist?

A property can exist and hold `false`, `0` or even `undefined`, so checking
the value isn't enough. Check the key instead:

```js
const settings = { volume: 0 };
'volume' in settings; // true
Object.hasOwn(settings, 'volume'); // true
settings.volume ? 'yes' : 'no'; // 'no' (0 is falsy!), the wrong question
```

## Looping over an object

```js
const scores = { ada: 10, grace: 7 };

Object.keys(scores); // ['ada', 'grace']
Object.values(scores); // [10, 7]
Object.entries(scores); // [['ada', 10], ['grace', 7]]

for (const name in scores) {
  console.log(name, scores[name]);
}

for (const [name, points] of Object.entries(scores)) {
  console.log(name, points);
}
```

## Nested objects and arrays of objects

```js
const order = {
  customer: { name: 'Ada' },
  items: [
    { name: 'pen', price: 2 },
    { name: 'notebook', price: 5 },
  ],
};

order.customer.name; // 'Ada'
order.items[1].price; // 5
```

## Missing data: ?. and ??

Reading a property of `undefined` crashes:

```js
const user = { name: 'Ada' };
user.address.city; // 💥 TypeError: Cannot read properties of undefined
```

**Optional chaining** `?.` stops and returns `undefined` instead.
The **nullish operator** `??` gives a fallback for `null` or `undefined`:

```js
user.address?.city; // undefined
user.address?.city ?? 'Unknown'; // 'Unknown'
```

Unlike `||`, `??` keeps falsy values like `0` and `''`:

```js
const volume = 0;
volume || 10; // 10, probably not what you wanted
volume ?? 10; // 0
```

## Objects as dictionaries

Objects are great for counting things, with keys you create on the fly:

```js
const counts = {};
for (const fruit of ['apple', 'pear', 'apple']) {
  counts[fruit] = (counts[fruit] ?? 0) + 1;
}
// { apple: 2, pear: 1 }
```

## Methods and this

Functions stored in an object are **methods**. Inside a method, `this` is the
object the method was called on:

```js
const counter = {
  count: 0,
  increment() {
    this.count++;
    return this.count;
  },
};

counter.increment(); // 1
counter.increment(); // 2
```

## Destructuring

Create variables from properties in one go, with optional default values:

```js
const user = { name: 'Ada', age: 36 };
const { name, age, city = 'Unknown' } = user;
// name is 'Ada', age is 36, city is 'Unknown'
```

It works in function parameters too:

```js
function greet({ name }) {
  return `Hi, ${name}!`;
}
greet(user); // 'Hi, Ada!'
```

## Copying and merging with spread

`...` copies the properties of an object into a new one. When keys repeat,
the last one wins:

```js
const defaults = { theme: 'light', volume: 5 };
const choices = { theme: 'dark' };

const settings = { ...defaults, ...choices }; // { theme: 'dark', volume: 5 }
const louder = { ...settings, volume: 10 }; // copy with one change
```

## Objects are references

A variable doesn't hold an object, it **points** to it:

```js
const a = { name: 'Ada' };
const b = a; // b points to the same object
b.name = 'Grace';
a.name; // 'Grace'!

{ x: 1 } === { x: 1 }; // false: two different objects, even if they look equal
```

This matters in functions. If a function changes an object it received, the
caller's object changes too. That surprise is called a **side effect**.
When in doubt, return a copy:

```js
function rename(user, name) {
  return { ...user, name }; // the original user stays the same
}
```

## Practice

Run `npm run verify` and continue with `exercises/07-objects/ex01.js`.
