import { combineReducers, configureStore, PreloadedState } from '@reduxjs/toolkit'
import formReducer from './reducers/formSlice'

// Create the root reducer independently to obtain the RootState type
const rootReducer = combineReducers({
  form: formReducer
})

/* eslint-disable @typescript-eslint/explicit-function-return-type */
export function setupStore(preloadedState?: PreloadedState<RootState>) {
  return configureStore({
    reducer: rootReducer,
    preloadedState
  })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
