/* eslint-disable no-console */
/* eslint-disable no-undef */
import configureStore from './store/store'
import { workoutAdded, workoutDeleted, workoutUpdated } from './store/workouts'

const store = configureStore()

// const unsubscribe = store.subscribe(() => {
//   /* eslint-disable no-console */
//   console.log('Store changed! ', store.getState())
// })
// unsubscribe()
// unsubscribe()

// *********************************************************************************************************
const newWorkout = {
  restTime: 10,
  workoutTime: 30,
  exercises: [1, 2, 3],
  numReps: 6,
}

store.dispatch(workoutAdded(newWorkout))
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
store.dispatch(workoutDeleted({ id: 1 }))
store.dispatch(workoutUpdated({ id: 2, numReps: 4, workoutTime: 60 }))

console.log('STATE: ', store.getState())
