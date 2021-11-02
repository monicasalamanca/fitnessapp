import { createSlice } from '@reduxjs/toolkit';
import { createSelector } from 'reselect';

export type Exercise = {
  id: number;
  name: string;
  description: string;
  muscles: string[];
  equipment: string[];
  image: string;
}

export interface IState {
  exercises: Exercise[]
}

let lastId = 0;

const defaultState = [{
    id: ++lastId,
    name: 'Squat',
    description: '',
    muscles: ['Glutes'],
    equipment: ['Body weight'],
    image: ''
}];

const exercisesSlice = createSlice({
  name: 'exercises',
  initialState: defaultState,
  reducers: {
    exerciseAdd(state, action) {
      const { name, description, muscles, equipment, image } = action.payload;
      state.push({
        id: ++lastId,
        name,
        description,
        muscles,
        equipment,
        image
      });
    },
    exerciseDeleted(state, action) {
      const { id } = action.payload;
      state = state.filter(exercise => exercise.id !== id);
    }
  }
});

export const { exerciseAdd, exerciseDeleted } = exercisesSlice.actions;
export default exercisesSlice.reducer;

// Selectors
export const getAllExercises = createSelector(
  (state: IState) => state.exercises,
  (exercises) => exercises
)
