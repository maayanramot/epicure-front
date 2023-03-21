import { createSlice } from '@reduxjs/toolkit'
import { IChef } from '../../services/interface'

const data = async () => {
  try {
    const response = await fetch(
      'https://web-server-hmw0.onrender.com/epicure/chefs',
      {
        method: 'GET',
      },
    )
    const data = await response.json()
    return data
  } catch (err) {
    console.log()
  }
}
const chefs: IChef[] = await data()

export const chefsSlice = createSlice({
  name: 'chefs',
  initialState: {
    value: chefs,
  },
  reducers: {
    chefsFilter: (state, action) => {
      const filterType = action.payload
      state.value = chefs
      switch (filterType) {
        case 'all':
          state.value = chefs
          break
        case 'new':
          state.value = state.value.filter((chef) => chef.isNew === true)
          break
        case 'mostViewed':
          state.value = state.value.filter((chef) => chef.mostViewed === true)
          break
        case 'chefOfTheWeek':
          state.value = state.value.filter(
            (chef) => chef.isChefOfTheWeek === true,
          )
          break
        default:
          state.value = chefs
      }
    },
  },
})

export const { chefsFilter } = chefsSlice.actions
export default chefsSlice.reducer
