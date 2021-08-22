import { configureStore } from '@reduxjs/toolkit'
import reducer from './reducer';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function () {
  return configureStore({ reducer });
}

