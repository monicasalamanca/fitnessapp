import { createSlice } from '@reduxjs/toolkit';
import { createSelector } from 'reselect';

export type IWorkout = {
  id: number
  restTime: number
  workoutTime: number
  exercises: number[]
  numReps: number
  isActive: boolean
}

export interface IState {
  workouts: IWorkout[]
}

let lastId = 0;

const defaultState = {
  workouts: [{
    id: ++lastId,
    restTime: 10,
    workoutTime: 40,
    exercises: [3, 4, 1, 6],
    numReps: 20,
    isActive: true
  }]
};
  

const workoutSlice = createSlice({
  name: 'workout',
  initialState: defaultState,
  reducers: {
    workoutAdded: (state, action) => {
      state.workouts.push({
        id: ++lastId,
        restTime: action.payload.restTime,
        workoutTime: action.payload.workoutTime,
        exercises: action.payload.exercises,
        numReps: action.payload.numReps,
        isActive: true
      });
    },
    workoutDeleted: (state, action) => {
      // Construct a new array immutably
      const newWorkouts = state.workouts.filter((workout: IWorkout) => workout.id !== action.payload.id);
      // "Mutate" the existing state to save the new array
      state.workouts = newWorkouts;
    },
    workoutUpdated: (state, action) => {
      const index = state.workouts.findIndex((workout: IWorkout) => workout.id === action.payload.id);
      state.workouts[index].numReps = action.payload.numReps ? action.payload.numReps : state.workouts[index].numReps;
      state.workouts[index].restTime = action.payload.restTime ? action.payload.restTime : state.workouts[index].restTime;
      state.workouts[index].workoutTime = action.payload.workoutTime ? action.payload.workoutTime : state.workouts[index].workoutTime;
      state.workouts[index].exercises = action.payload.exercises ? action.payload.exercises : state.workouts[index].exercises;
      state.workouts[index].isActive = !action.payload.isActive ? action.payload.isActive : state.workouts[index].isActive;
    }
  }
});

export const { workoutAdded, workoutDeleted, workoutUpdated } = workoutSlice.actions;
export default workoutSlice.reducer;

// Selectors
export const getAllActiveWorkouts = createSelector(
  (state: IState) => state.workouts,
  (workouts) => workouts.filter((workout: IWorkout) => workout.isActive === true)
)
