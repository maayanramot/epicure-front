import { createSlice } from '@reduxjs/toolkit'
import { IDish } from '../../services/interface'

const data = async () => {
  try {
    const response = await fetch('http://localhost:8000/epicure/dishes', {
      method: 'GET',
    })
    const data = await response.json()
    return data
  } catch (err) {
    console.log()
  }
}
const dishes: IDish[] = await data()

export const dishesSlice = createSlice({
  name: 'dishes',
  initialState: {
    value: dishes,
  },
  reducers: {
    dishFilter: (state, action) => {
      const filter = action.payload
      state.value = dishes
      switch (filter) {
        case 'all':
          state.value = dishes
          break
        case 'signature':
          state.value = state.value.filter(
            (dishes) => dishes.isPopular === true,
          )
          break
        case 'breakfast':
          state.value = dishes
          break
        case 'launch':
          state.value = dishes
          break
        case 'dinner':
          state.value = dishes
          break
        default:
          state.value = dishes
      }
    },
  },
})

export const { dishFilter } = dishesSlice.actions
export default dishesSlice.reducer
