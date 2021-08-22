import { createSlice } from '@reduxjs/toolkit'

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

const defaultState: IState = {
  workouts: [],
}

let lastId = 0;

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
      });
    },
    workoutDeleted: (state, action) => {
      const newWorkouts = state.workouts.filter(workout => workout.id !== action.payload.id);
      state.workouts = newWorkouts;
    },
    workoutUpdated: (state, action) => {
      const index = state.workouts.findIndex(workout => workout.id === action.payload.id);
      state.workouts[index].numReps = action.payload.numReps ? action.payload.numReps : state.workouts[index].numReps;
      state.workouts[index].restTime = action.payload.restTime ? action.payload.restTime : state.workouts[index].restTime;
      state.workouts[index].workoutTime = action.payload.workoutTime ? action.payload.workoutTime : state.workouts[index].workoutTime;
      state.workouts[index].exercises = action.payload.exercises ? action.payload.exercises : state.workouts[index].exercises;
    }
  }
});

export const { workoutAdded, workoutDeleted, workoutUpdated } = workoutSlice.actions;
export default workoutSlice.reducer;

