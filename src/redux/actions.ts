import * as actions from './actionTypes'

export const workoutAdded = (restTime: number, workoutTime: number, exercises: number[], numReps: number): any => {
  return {
    type: actions.WORKOUT_ADDED,
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
    type: actions.WORKOUT_DELETED,
    payload: {
      id,
    },
  }
}
