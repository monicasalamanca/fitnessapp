import { createSlice, PayloadAction } from '@reduxjs/toolkit'

// Define a type for the slice state
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

// Define the initial state using that type
const initialState: IState = {
  workouts: [],
}

let lastId = 0

export const workoutSlice = createSlice({
  name: 'workout',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    add: (state, action: PayloadAction<IWorkout>) => {
      state.workouts.push({
        id: ++lastId,
        restTime: action.payload.restTime,
        workoutTime: action.payload.workoutTime,
        exercises: action.payload.exercises,
        numReps: action.payload.numReps,
      })
    },
    // delete: (state) => {
    //   state.value -= 1;
    // },
    // // Use the PayloadAction type to declare the contents of `action.payload`
    // incrementByAmount: (state, action: PayloadAction<number>) => {
    //   state.value += action.payload;
    // }
  },
})

export const { add } = workoutSlice.actions

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.workouts

export default workoutSlice.reducer
