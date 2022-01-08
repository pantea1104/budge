import { configureStore } from '@reduxjs/toolkit'
import thunkMiddleware from 'redux-thunk'
import { reducers } from './slices'

export const store = configureStore({
  reducer: reducers,
  // middleware: [thunkMiddleware],
  devTools: process.env.NODE_ENV !== 'production',
  // preloadedState: initialState,
})
