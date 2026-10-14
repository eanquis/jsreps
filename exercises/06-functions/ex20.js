/**
 * Exercise 20 · Challenge: pipelines
 *
 * Task:
 *   Declare and export `pipeline(...fns)`. It returns a new function that
 *   receives a value and passes it through every function in `fns`, in
 *   order: the result of each one is the input of the next.
 *
 *   const addOneThenDouble = pipeline((n) => n + 1, (n) => n * 2);
 *   addOneThenDouble(3); // 8, because (3 + 1) * 2
 *
 *   With no functions, the value comes out unchanged.
 */

// Write your code below this line.
