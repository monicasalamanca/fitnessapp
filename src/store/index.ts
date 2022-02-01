import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { createSelectorHook, useDispatch } from "react-redux";
import workoutsReducer from "./workouts";
import exercisesReducer from "./exercises";

const rootReducer = combineReducers({
  workouts: workoutsReducer,
  exercises: exercisesReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export const useTypedSelector = createSelectorHook<RootState>();
export const useTypedDispatch = useDispatch;

const store = configureStore({ reducer: rootReducer });

export default store;
