import { configureStore } from '@reduxjs/toolkit'
import restaurantsReducer from './slices/restaurantsSlice'
import chefsReducer from './slices/chefSlice'
import dishesReducer from './slices/dishesSlice'
import userReducer from './slices/userSlice'

export default configureStore({
  reducer: {
    restaurants: restaurantsReducer,
    chefs: chefsReducer,
    dishes: dishesReducer,
    users: userReducer,
  },
})
