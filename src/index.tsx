/* eslint-disable no-console */
/* eslint-disable no-undef */
import configureStore from "./store/store";
// import * as actions from './store/api'
// import { workoutAdded, workoutDeleted, workoutUpdated } from './store/workouts'

//import reportWebVitals from './reportWebVitals';

const store = configureStore();

// const unsubscribe = store.subscribe(() => {
//   /* eslint-disable no-console */
//   console.log('Store changed! ', store.getState())
// })
// unsubscribe()
// unsubscribe()

// *********************************************************************************************************
/*
store.dispatch(
  workoutAdded({
    restTime: 10,
    workoutTime: 30,
    exercises: [1, 2, 3],
    numReps: 6,
  })
)
store.dispatch(
  workoutAdded({
    restTime: 15,
    workoutTime: 25,
    exercises: [1, 2, 3],
    numReps: 5,
  })
)
store.dispatch(
  workoutAdded({
    restTime: 10,
    workoutTime: 45,
    exercises: [1, 2, 3],
    numReps: 6,
  })
)
store.dispatch(
  workoutAdded({
    restTime: 15,
    workoutTime: 25,
    exercises: [1, 2, 3],
    numReps: 5,
  })
)
store.dispatch(workoutDeleted({ id: 3 }))
store.dispatch(workoutUpdated({ id: 4, numReps: 4, workoutTime: 60, isActive: false }))

store.dispatch(
  actions.apiCallBegan({
    url: '/workouts',
    onSuccess: 'workoutsReceived',
  })
)

// store.dispatch({
//   type: actions.apiCallBegan.type,
//   payload: {
//     url: '/workouts',
//     onSuccess: 'workoutsReceived',
//     onError: 'apiRequestFailed',
//   },
// })

// const activeWorkouts = getAllActiveWorkouts(store.getState())

// console.log('activeWorkouts: ', activeWorkouts)
console.log('STATE: ', store.getState())
*/
