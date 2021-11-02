import reducer, { Exercise, exerciseAdd, exerciseDeleted } from './workouts';

// Tests Deleted Workout
test('should return the state minus one workout', () => {
  const previousState = [
    {
      id:1,
      restTime:10,
      workoutTime:30,
      exercises:[1,2,3],
      numReps:6,
      isActive:true
    },
    {
      id:2,
      restTime:15,
      workoutTime:25,
      exercises:[1,2,3],
      numReps:5,
      isActive:true
    },{
      id:3,
      restTime:10,
      workoutTime:45,
      exercises:[1,2,3],
      numReps:6,
      isActive:true
    },{
      id:4,
      restTime:15,
      workoutTime:25,
      exercises:[1,2,3],
      numReps:5,
      isActive:true
    }
  ]
}