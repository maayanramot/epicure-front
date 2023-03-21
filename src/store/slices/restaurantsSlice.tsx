import { createSlice } from '@reduxjs/toolkit'
import { IRestaurant } from '../../services/interface'

const data = async () => {
  try {
    const response = await fetch(
      'https://epicure-front-deploy.onrender.com/epicure/restaurants',
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
const restaurants: IRestaurant[] = await data()

export const restaurantsSlice = createSlice({
  name: 'restaurants',
  initialState: {
    value: restaurants,
  },
  reducers: {
    restaurantFilter: (state, action) => {
      const filter = action.payload
      state.value = restaurants

      switch (filter) {
        case 'all':
          state.value = restaurants
          break
        case 'new':
          state.value = state.value.filter(
            (restaurant) => restaurant.isNew === true,
          )
          break
        case 'mostPopular':
          state.value = state.value.filter(
            (restaurant) => restaurant.isPopular === true,
          )
          break
        case 'openNow':
          state.value = restaurants
          break
        case 'mapView':
          state.value = state.value.filter((restaurant) => {
            return null
          })
          break
        default:
          state.value = restaurants
      }
    },
  },
})

export const { restaurantFilter } = restaurantsSlice.actions
export default restaurantsSlice.reducer
