/**
 * Exercise 20 · Challenge: the honor roll
 *
 * Array methods can be chained: each one works on the result of the
 * previous one.
 *
 * Task:
 *   Each student looks like { name: 'Ada', grades: [9, 8, 10] }.
 *   Return the names of the students whose average grade is 8 or more,
 *   from the highest average to the lowest. Students with the same average
 *   keep their original order.
 *
 *   Don't use loops, and don't change the original array.
 */

function average(grades) {
  return grades.reduce((sum, grade) => sum + grade, 0) / grades.length;
}

export function honorRoll(students) {
  return students
    .map((student) => ({ name: student.name, average: average(student.grades) }))
    .filter((student) => student.average >= 8)
    .toSorted((a, b) => b.average - a.average)
    .map((student) => student.name);
}
