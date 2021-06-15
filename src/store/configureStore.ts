import { configureStore } from '@reduxjs/toolkit'
import reducer from './workouts'

export default function (): any {
  return configureStore({
    reducer,
  })
}
