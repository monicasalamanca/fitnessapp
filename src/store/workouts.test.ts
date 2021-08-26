import React from 'react';
// import { render } from '@testing-library/react';
// import { Provider } from 'react-redux';
// import { store } from './app/store';
import reducer, {IWorkout, workoutAdded, workoutDeleted, workoutUpdated} from './workouts';

// test('renders learn react link', () => {
//   const { getByText } = render(
//     <Provider store={store}>
//       <App />
//     </Provider>
//   );

//   expect(getByText(/learn/i)).toBeInTheDocument();
// });

test('should return the state minus one workout', () => {
  const previousState = [
    {
      id:1,
      restTime:10,
      workoutTime:30,
      exercises:[1,2,3],
      numReps:6,
      isActive:true
    },
    {
      id:2,
      restTime:15,
      workoutTime:25,
      exercises:[1,2,3],
      numReps:5,
      isActive:true
    },{
      id:3,
      restTime:10,
      workoutTime:45,
      exercises:[1,2,3],
      numReps:6,
      isActive:true
    },{
      id:4,
      restTime:15,
      workoutTime:25,
      exercises:[1,2,3],
      numReps:5,
      isActive:true
    }
  ]
  expect(reducer(previousState, workoutDeleted({ id: 1 }))).toEqual([
    {
      id:2,
      restTime:15,
      workoutTime:25,
      exercises:[1,2,3],
      numReps:5,
      isActive:true
    },{
      id:3,
      restTime:10,
      workoutTime:45,
      exercises:[1,2,3],
      numReps:6,
      isActive:true
    },{
      id:4,
      restTime:15,
      workoutTime:25,
      exercises:[1,2,3],
      numReps:5,
      isActive:true
    }
  ])
});

test('should return the state plus one', () => {
  const previousState: IWorkout[] | undefined = []
  expect(
    reducer(previousState, workoutAdded(
      { restTime:10, workoutTime:30, exercises:[1,2,3], numReps:6 }
    ))).toEqual([
    { id:1, restTime:10, workoutTime:30, exercises:[1,2,3], numReps:6, isActive:true }
  ])
});

test('should return the state with the changed object', () => {
  const previousState: IWorkout[] | undefined = [
    { id:2, restTime:15, workoutTime:25, exercises:[1,2,3], numReps:5, isActive:true },
    { id:3, restTime:10, workoutTime:45, exercises:[1,2,3], numReps:6, isActive:true },
    { id:4, restTime:15, workoutTime:25, exercises:[1,2,3], numReps:5, isActive:true }
  ]
  expect(
    reducer(previousState, workoutUpdated(
      { id:2, numReps:4, workoutTime:60, isActive:false }
    ))).toEqual([
    { id:2, restTime:15, workoutTime:60, exercises:[1,2,3], numReps:4, isActive:false },
    { id:3, restTime:10, workoutTime:45, exercises:[1,2,3], numReps:6, isActive:true },
    { id:4, restTime:15, workoutTime:25, exercises:[1,2,3], numReps:5, isActive:true }
  ])
});
