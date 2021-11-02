import { combineReducers } from "redux";
import workoutsReducer from './workouts';
import exercisesReducer from "./exercises";

export default combineReducers({
  workouts: workoutsReducer,
  exercises: exercisesReducer
});

// export default workoutsReducer;