import { createAction } from '@reduxjs/toolkit'

// Action Types
const WORKOUT_ADDED = 'workoutAdded'
const WORKOUT_DELETED = 'workoutDeleted'

// Models / Types
interface IWorkout {
  id: number
  restTime: number
  workoutTime: number
  exercises: number[]
  numReps: number
}

interface IState {
  workouts: IWorkout[]
}

interface IAction {
  type: string
  payload: IWorkout[] | any
}

// Action Creators
// export const workoutAdded = createAction<IWorkout>('workoutAdded')
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

export const workoutDeleted = createAction('workoutDeleted', (id: number) => {
  return { payload: { id } }
})
// eslint-disable-next-line no-console
// console.log(workoutDeleted(1))
// export const workoutDeleted = (id: number): any => {
//   return {
//     type: WORKOUT_DELETED,
//     payload: {
//       id,
//     },
//   }
// }

// Reducer
const defaultState: IState = {
  workouts: [],
}

let lastId = 0

const reducer = (state: IState = defaultState, action: IAction): IState => {
  switch (action.type) {
    case WORKOUT_ADDED:
      return {
        ...state,
        workouts: [
          ...state.workouts,
          {
            id: ++lastId,
            restTime: action.payload.restTime,
            workoutTime: action.payload.workoutTime,
            exercises: action.payload.exercises,
            numReps: action.payload.numReps,
          },
        ],
      }
    case workoutDeleted.type:
      return {
        ...state,
        workouts: state.workouts.filter((workout) => workout.id !== action.payload.id),
      }
    default:
      return state
  }
}

export default reducer
