import { WORKOUT_ADDED, WORKOUT_DELETED } from './actionTypes'
import { IAction, IState } from './models'

const defaultState: IState = {
  workouts: [],
}

let lastId = 0

const reducer = (state: IState = defaultState, action: IAction): IState => {
  switch (action.type) {
    case WORKOUT_ADDED:
      return {
        ...state,
        workouts: [
          ...state.workouts,
          {
            id: ++lastId,
            restTime: action.payload.restTime,
            workoutTime: action.payload.workoutTime,
            exercises: action.payload.exercises,
            numReps: action.payload.numReps,
          },
        ],
      }
    case WORKOUT_DELETED:
      return {
        ...state,
        workouts: state.workouts.filter((workout) => workout.id !== action.payload.id),
      }
    default:
      return state
  }
}

export default reducer
