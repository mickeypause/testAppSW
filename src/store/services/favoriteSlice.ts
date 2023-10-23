import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Person } from './types'

type FavoriteState = {
  people: Person[]
}
const initialState: FavoriteState = {
  people: [],
}

const favoriteSlice = createSlice({
  name: 'favorite',
  initialState: initialState,
  reducers: {
    addPerson(state, action: PayloadAction<Person>) {
      if (action.payload) state.people.push(action.payload)
    },
    removePerson(state, action: PayloadAction<string>) {
      const url = action.payload
      state.people = state.people.filter((item) => item.url !== url)
    },
    reset(state) {
      state.people = []
    },
  },
})

export const { addPerson, reset, removePerson } = favoriteSlice.actions

export default favoriteSlice.reducer
