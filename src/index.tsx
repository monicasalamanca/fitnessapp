/* eslint-disable no-console */
/* eslint-disable no-undef */
import configureStore from './store/configureStore'
import { workoutAdded, workoutDeleted } from './store/workouts'

const store = configureStore()

const unsubscribe = store.subscribe(() => {
  console.log('Store changed! ', store.getState())
})

store.dispatch(workoutAdded(10, 30, [1, 2, 3], 6))
store.dispatch(workoutAdded(45, 15, [1], 13))
store.dispatch(workoutAdded(20, 20, [1, 2], 5))
store.dispatch(workoutAdded(35, 25, [1, 2, 4], 10))

unsubscribe()

store.dispatch(workoutDeleted(1))
store.dispatch(workoutDeleted(2))

console.log(store.getState())
