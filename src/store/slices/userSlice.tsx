import { createSlice } from '@reduxjs/toolkit'
import { IUser } from '../../services/interface'

const data = async () => {
  try {
    const response = await fetch(
      'https://web-server-hmw0.onrender.com/epicure/users',
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
const users: IUser[] = await data()

export const usersSlice = createSlice({
  name: 'users',
  initialState: {
    value: users,
  },
  reducers: {
    userFilter: (state, action) => {
      const filter = action.payload
      state.value = users

      switch (filter) {
        case 'all':
          state.value = users
          break
        default:
          state.value = users
      }
    },
  },
})

export const { userFilter } = usersSlice.actions
export default usersSlice.reducer
