import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit'

// eslint-disable-next-line import/no-cycle
import { rootReducer } from './rootReducer'

const store = configureStore({ reducer: rootReducer })

export type AppState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action
>

export function createStore(initialState?: AppState) {
  return configureStore({
    reducer: rootReducer,
    preloadedState: initialState,
  })
}
