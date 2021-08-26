import { createSlice } from '@reduxjs/toolkit';
import { createSelector } from 'reselect';

export interface IWorkout {
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

const defaultState: IWorkout[] = [];

let lastId = 0;

const workoutSlice = createSlice({
  name: 'workout',
  initialState: defaultState,
  reducers: {
    workoutAdded: (state, action) => {
      state.push({
        id: ++lastId,
        restTime: action.payload.restTime,
        workoutTime: action.payload.workoutTime,
        exercises: action.payload.exercises,
        numReps: action.payload.numReps,
        isActive: true
      });
    },
    workoutDeleted: (state, action) => {
      return state.filter(workout => workout.id !== action.payload.id);
    },
    workoutUpdated: (state, action) => {
      const index = state.findIndex(workout => workout.id === action.payload.id);
      state[index].numReps = action.payload.numReps ? action.payload.numReps : state[index].numReps;
      state[index].restTime = action.payload.restTime ? action.payload.restTime : state[index].restTime;
      state[index].workoutTime = action.payload.workoutTime ? action.payload.workoutTime : state[index].workoutTime;
      state[index].exercises = action.payload.exercises ? action.payload.exercises : state[index].exercises;
      state[index].isActive = !action.payload.isActive ? action.payload.isActive : state[index].isActive;
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
