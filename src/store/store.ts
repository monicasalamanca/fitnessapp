// This setup work for setup 1
// // import { configureStore } from '@reduxjs/toolkit'
// import { createStore } from 'redux'
// import { devToolsEnhancer } from 'redux-devtools-extension'
// import reducer from './workouts/reducer'

// // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
// export default function configureStore() {
//   return createStore(reducer, devToolsEnhancer({ trace: true }))
// }

/*******************************************************************************************************/
// This setup work for setup 2 and 3
import { configureStore } from '@reduxjs/toolkit'
import reducer from './workouts'

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function () {
  return configureStore({ reducer })
}
