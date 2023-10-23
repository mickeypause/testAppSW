import { configureStore } from '@reduxjs/toolkit'
import FavoriteReducer from './services/favoriteSlice'
import { api } from './services/api'

const store = configureStore({
  reducer: {
    favorite: FavoriteReducer,
    [api.reducerPath]: api.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
