import { combineReducers } from '@reduxjs/toolkit'

// eslint-disable-next-line import/no-cycle
import { userReducer } from './user'
import { servicesReducer } from './service'

export const rootReducer = combineReducers({
  user: userReducer,
  services: servicesReducer,
})
