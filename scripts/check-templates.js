// Every exercise must fail before the student touches it. An exercise that
// already passes would teach nothing.
import { listExercises } from '../src/exercises.js';
import { runTestFiles } from '../src/runner.js';

const exercises = await listExercises(process.cwd());
const results = await runTestFiles(exercises.map((exercise) => exercise.testFile));
const passing = exercises.filter((exercise) => results.get(exercise.testFile).passed);

for (const exercise of passing) {
  console.error(`✖ ${exercise.id} passes without any changes.`);
}
console.log(`${exercises.length - passing.length}/${exercises.length} exercises fail as expected.`);
process.exit(passing.length === 0 ? 0 : 1);
