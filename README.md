# jsreps

Learn programming fundamentals in JavaScript by practicing, again and again.

Each module teaches one concept with a short lesson and around 20 small
exercises. Every exercise has automated tests, so you know right away whether
your code works.

## Modules

| #   | Module                                     | Exercises |
| --- | ------------------------------------------ | --------- |
| 01  | [Variables](lessons/01-variables.md)       | 20        |
| 02  | [Conditionals](lessons/02-conditionals.md) | 20        |

## Getting started

### Option 1: in the browser (no installation)

1. Fork this repository.
2. In your fork, click **Code → Codespaces → Create codespace**.
3. Wait for it to load and run `npm run verify` in the terminal.

### Option 2: on your computer

You need [Node.js 24](https://nodejs.org) or newer and [git](https://git-scm.com).
There is nothing else to install.

```bash
git clone https://github.com/<your-user>/jsreps.git
cd jsreps
npm run verify
```

## How it works

1. Read the lesson in [`lessons/`](lessons).
2. Run `npm run watch`. It checks your exercises every time you save a file.
3. Open the exercise it points to, read the task at the top, and write your code.
4. When the tests pass, move to the next one.

```
01-variables  3/20
  ✔ ex01  Your first variable
  ✔ ex02  Numbers
  ✔ ex03  Booleans
  ✖ ex04  Fix the bug: a constant can't change
  ○ ex05  Changing a variable

Progress ███░░░░░░░░░░░░░░░░░ 3/20
```

### Commands

| Command                            | What it does                                     |
| ---------------------------------- | ------------------------------------------------ |
| `npm run verify`                   | Checks every exercise and shows your progress    |
| `npm run watch`                    | Same as verify, again every time you save        |
| `npm run hint`                     | Shows a hint for the exercise you're working on  |
| `npm run hint -- 2`                | Shows the next hint                              |
| `npm run hint -- 01-variables/ex04` | Shows a hint for a specific exercise            |

### Stuck?

- Read the error message carefully. It usually tells you exactly what's wrong.
- Use `npm run hint`. Hints go from subtle to more direct, but they never
  give you the code.
- Try for real before peeking. Once you pass, compare your code with the
  reference in [`solutions/`](solutions) and read the tests in [`tests/`](tests):
  there's usually more than one good way to solve a problem.

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md).

## License

[MIT](LICENSE)
