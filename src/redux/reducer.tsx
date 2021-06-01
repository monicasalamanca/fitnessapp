import { IAction, IState } from './interface'

const reducer = (state: IState, action: IAction): IState => {
  switch (action.type) {
    case 'workoutAdded':
      return {
        ...state,
        workouts: [...state.workouts, action.payload],
      }
    // case 'workoutDeleted':
    //   return state.workouts.filter((workout) => workout.id !== action.payload.id)
    default:
      return state
  }
}

export default reducer
