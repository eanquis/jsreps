# Contributing

Thanks for helping people learn!

## Project layout

```
lessons/<module>.md                 Theory for each module
exercises/<module>/exNN.js          What students edit (always failing at first)
tests/<module>/exNN.test.js         Tests for each exercise
tests/helpers.js                    Loads exercises and reports crashes clearly
solutions/<module>/exNN.js          Reference solution for each exercise
hints/<module>.json                 Hints per exercise, least to most revealing
src/                                The CLI behind `npm run verify` and `npm run hint`
scripts/                            Maintainer checks
```

There are no dependencies. Everything runs on Node.js 24.

## Rules for exercises

- Every exercise has a reference solution in `solutions/`, with the same path
  and the same header comment.
- Hints explain the idea, never the code. The code is what `solutions/` is for.
- Every exercise starts with a header comment:
  `Exercise NN · Title`, a short explanation and the task.
- Exercises must **fail** before the student edits them.
- From module 02 on, exercises are functions, and tests check them with
  `assertCalls()` from `tests/helpers.js`. Cover every branch: the solutions
  must reach 100% coverage.
- Tests use fixed values. When a test needs to check *how* something was done
  (e.g. "use `let`"), it reads the code with `code()` from `tests/helpers.js`.
- Write assertion messages for beginners: say what to do, not just what failed.
- Accept every reasonable solution: test behavior, not one specific way of
  writing it.

## Checks

| Command                  | What it checks                                          |
| ------------------------ | ------------------------------------------------------- |
| `npm test`               | The CLI, with 100% line, branch and function coverage   |
| `npm run test:templates` | Every exercise fails before being solved                |
| `npm run test:solutions` | The tests pass against the reference solutions, at 100% coverage |

CI runs all three on the main repository.
