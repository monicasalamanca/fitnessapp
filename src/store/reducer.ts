import { combineReducers } from "redux";
import workoutsReducer from './workouts';

export default combineReducers({
  workouts: workoutsReducer
});