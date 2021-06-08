/* eslint-disable no-console */
/* eslint-disable no-undef */
// import React from 'react';
// import ReactDOM from 'react-dom';
import store from './redux/store'
import * as actions from './redux/actionTypes'
import { workoutAdded, workoutDeleted } from './redux/actions'

// import './index.css';
// import App from './App';
// import { store } from './app/store';
// import { Provider } from 'react-redux';
// import * as serviceWorker from './serviceWorker';

const unsubscribe = store.subscribe(() => {
  console.log('Store changed! ', store.getState())
})

store.dispatch(workoutAdded(10, 30, [1, 2, 3], 6))
store.dispatch(workoutAdded(45, 15, [1], 13))

unsubscribe()

store.dispatch({
  type: actions.WORKOUT_ADDED,
  payload: {
    restTime: 20,
    workoutTime: 20,
    exercises: [1, 2, 3],
    numReps: 5,
  },
})

store.dispatch(workoutDeleted(1))
store.dispatch(workoutDeleted(2))

// store.dispatch({
//   type: actions.WORKOUT_DELETED,
//   payload: {
//     id: 1,
//   },
// })

console.log(store.getState())

// ReactDOM.render(
//   <React.StrictMode>
//     {/* <Provider store={store}> */}
//     <App />
//     {/* </Provider> */}
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
