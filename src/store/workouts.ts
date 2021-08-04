import { createAction, createReducer } from '@reduxjs/toolkit'

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

export const workoutAdded = createAction<{ restTime: number, workoutTime: number, exercises: number[], numReps: number }>('workoutAdded');
export const workoutDeleted = createAction<{ id: number }>('workoutDeleted')

const defaultState: IState = {
  workouts: [],
}

let lastId = 0

export default createReducer(defaultState, builder => {
  builder
    .addCase(workoutAdded, (state, action) => {
      state.workouts.push({
        id: ++lastId,
        restTime: action.payload.restTime,
        workoutTime: action.payload.workoutTime,
        exercises: action.payload.exercises,
        numReps: action.payload.numReps,
      })
    })
    .addCase(workoutDeleted, (state, action) => {
      const newWorkouts = state.workouts.filter(workout => workout.id !== action.payload.id);
      state.workouts = newWorkouts;
    })
})
