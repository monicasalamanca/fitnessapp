import { createAction } from '@reduxjs/toolkit'

export interface IWorkout {
  id: number
  restTime: number
  workoutTime: number
  exercises: number[]
  numReps: number
}

export interface IState {
  workouts: IWorkout[]
}

export interface IAction {
  type: string
  payload: IWorkout[] | any
}

export const workoutAdded = createAction('workoutAdded', (workout) => {
  return { payload: workout }
})
export const workoutDeleted = createAction<IWorkout>('workoutDeleted')

const defaultState: IState = {
  workouts: [],
}

let lastId = 0

const reducer = (state: IState = defaultState, action: IAction): IState => {
  switch (action.type) {
    case workoutAdded.type:
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
