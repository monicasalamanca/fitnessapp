import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import reducer from './reducer';
import api from './middleware/api';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function () {
  return configureStore({ 
    reducer,
    middleware: [
      ...getDefaultMiddleware(),
      api
    ]
  });
}

