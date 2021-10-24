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
  list: IWorkout[],
  loading: false,
  lastFetch: null
}

let lastId = 0;

const defaultState = {
  list: [{
    id: ++lastId,
    restTime: 10,
    workoutTime: 40,
    exercises: [3, 4, 1, 6],
    numReps: 20,
    isActive: true
  }],
  loading: false,
  lastFetch: null
};
  

const workoutSlice = createSlice({
  name: 'workout',
  initialState: defaultState,
  reducers: {
    // workoutAdded: (state, action)
    workoutAdded: (workouts, action) => {
      workouts.list.push({
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
      const newWorkouts = state.list.filter((workout: IWorkout) => workout.id !== action.payload.id);
      // "Mutate" the existing state to save the new array
      state.list = newWorkouts;
    },
    workoutUpdated: (workouts, action) => {
      const index = workouts.list.findIndex((workout: IWorkout) => workout.id === action.payload.id);
      workouts.list[index].numReps = action.payload.numReps ? action.payload.numReps : workouts.list[index].numReps;
      workouts.list[index].restTime = action.payload.restTime ? action.payload.restTime : workouts.list[index].restTime;
      workouts.list[index].workoutTime = action.payload.workoutTime ? action.payload.workoutTime : workouts.list[index].workoutTime;
      workouts.list[index].exercises = action.payload.exercises ? action.payload.exercises : workouts.list[index].exercises;
      workouts.list[index].isActive = !action.payload.isActive ? action.payload.isActive : workouts.list[index].isActive;
    }
  }
});

export const { workoutAdded, workoutDeleted, workoutUpdated } = workoutSlice.actions;
export default workoutSlice.reducer;

// Selectors
export const getAllActiveWorkouts = createSelector(
  (state: IState) => state.list,
  (workouts) => workouts.filter((workout: IWorkout) => workout.isActive === true)
)
