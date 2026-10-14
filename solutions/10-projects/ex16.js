/**
 * Exercise 16 · Grade report
 *
 * Bigger problems get easier when you split them into small functions that
 * build on each other.
 *
 * Task:
 *   1. `average(grades)`: the average of an array of numbers.
 *      Throw an Error with the message "No grades" when the array is empty.
 *   2. `letterGrade(average)`: "A" for 90 or more, "B" for 80 or more,
 *      "C" for 70 or more, "D" for 60 or more, and "F" below 60.
 *   3. `report(students)`: receive an array of students like
 *      { name: 'Ada', grades: [90, 100] } and return an array of
 *      { name, average, letter }, in the same order.
 *   4. `bestStudent(students)`: the name of the student with the highest
 *      average. On a tie, the first one in the array wins.
 */

export function average(grades) {
  if (grades.length === 0) {
    throw new Error('No grades');
  }
  const sum = grades.reduce((total, grade) => total + grade, 0);
  return sum / grades.length;
}

export function letterGrade(average) {
  if (average >= 90) return 'A';
  if (average >= 80) return 'B';
  if (average >= 70) return 'C';
  if (average >= 60) return 'D';
  return 'F';
}

export function report(students) {
  return students.map((student) => {
    const studentAverage = average(student.grades);
    return {
      name: student.name,
      average: studentAverage,
      letter: letterGrade(studentAverage),
    };
  });
}

export function bestStudent(students) {
  const entries = report(students);
  let best = entries[0];
  for (const entry of entries) {
    if (entry.average > best.average) {
      best = entry;
    }
  }
  return best.name;
}
