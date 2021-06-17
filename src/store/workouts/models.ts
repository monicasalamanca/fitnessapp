export interface IWorkout {
  id: number
  restTime: number
  workoutTime: number
  exercises: number[]
  numReps: number
}

export interface IState {
  workouts: IWorkout[]
}

export interface IAction {
  type: string
  payload: IWorkout[] | any
}
