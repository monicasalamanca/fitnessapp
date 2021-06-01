/* eslint-disable no-console */
/* eslint-disable no-undef */
// import React from 'react';
// import ReactDOM from 'react-dom';
import store from './redux/store'
// import './index.css';
// import App from './App';
// import { store } from './app/store';
// import { Provider } from 'react-redux';
// import * as serviceWorker from './serviceWorker';

store.dispatch({
  type: 'workoutAdded',
  payload: {
    restTime: 10,
    workoutTime: 30,
    exercises: [1, 2, 3],
    numReps: 6,
  },
})

store.dispatch({
  type: 'workoutDeleted',
  payload: {
    id: 1,
  },
})

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
