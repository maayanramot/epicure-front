import React from 'react'
import { IUser } from '../../../services/interface'

fetch('https://web-server-hmw0.onrender.com/epicure/users/userData', {
  method: 'POST',
  body: JSON.stringify({ token: window.localStorage.getItem('token') }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((res) => res.json())
  .then((data) => {
    console.log(data, 'user data')
  })

const UserName: React.FC = () => {
  return <span>{'user.firstName'}</span>
}

export default UserName
