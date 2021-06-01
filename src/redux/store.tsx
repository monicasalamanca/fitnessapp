import { createStore } from 'redux';
import reducer from './reducer';
import { IState, IWorkout } from './interface';

const initialState: IState = {
  workouts: Array<IWorkout>
}

const store = createStore(reducer);

export default store;
