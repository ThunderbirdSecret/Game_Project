import { Action, configureStore, Store, ThunkAction } from '@reduxjs/toolkit'


// eslint-disable-next-line import/no-cycle
// import { InitialStateType as UserInitialStateType } from '@/store/user/user.slice'
// eslint-disable-next-line import/no-cycle
import { rootReducer } from './rootReducer'

/* export interface InitialStateType {
  user: UserInitialStateType,
  services: 
} */
/*
export const store = configureStore({
  reducer: rootReducer,
})
*/

/* export function createStore(initialState: any) {
  return configureStore({
    preloadedState: initialState,
    reducer: rootReducer,
  });
}
*/

// service: IUserService в thunk.extraArgument
export function createStore(initialState?: any) {

  return configureStore({
    preloadedState: initialState,
    reducer: rootReducer,
  })
}

// export const store = configureStore({
//  reducer: rootReducer,
// })

export type AppStore = ReturnType<typeof createStore>

export type AppState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']

// export type AppStore = typeof store
// export type AppState = ReturnType<typeof store.getState>
// export type AppDispatch = typeof store.dispatch

// Action vs ThunkAction
// Action возвращает объект
// ThunkAction возвращает функцию (в том числе асинхронную) 
// ThunkAction приносит Мидлвара redux-thunk, которая уже включена в Redux Toolkit
// createAsyncThunk
// Каждый Thunk, созданный через createAsyncThunk(), содержит внутри себя три редьюсера: pending, fulfilled и rejected. 
// Они соответствуют состояниям промиса и вызываются Redux Toolkit в тот момент, когда промис переходит в одно из этих состояний. 

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType, // R тип возвращаемого значения
  AppState, // S состояние
  unknown, // E
  Action // A
>
// = (dispatch: ThunkDispatch<S, E, A>, getState: () => S, extraArgument: E) => R
