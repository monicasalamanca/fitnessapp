import { WORKOUT_ADDED, WORKOUT_DELETED } from './actionTypes'

export const workoutAdded = (restTime: number, workoutTime: number, exercises: number[], numReps: number): any => {
  return {
    type: WORKOUT_ADDED,
    payload: {
      restTime,
      workoutTime,
      exercises,
      numReps,
    },
  }
}

export const workoutDeleted = (id: number): any => {
  return {
    type: WORKOUT_DELETED,
    payload: {
      id,
    },
  }
}
