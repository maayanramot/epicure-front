import React, { MouseEventHandler, useState } from 'react'
import HelloUser from '../../../features/components/HelloUser/HelloUser'
import Login from '../Login/Login'
import Register from '../Register/Register'
import UserExist from '../UserExist/UserExist'
import './UserDetails.css'

interface IUserDetails {
  close: MouseEventHandler<HTMLButtonElement>
}

const UserDetails: React.FC<IUserDetails> = ({ close }) => {
  const [currentForm, setCurrentForm] = useState('login')
  const [userName, setUserName] = useState('')

  const handleFormChange = (form: string, lastUserName: string) => {
    setCurrentForm(form)
    setUserName(lastUserName)
  }

  return (
    <div className="sign-in">
      <div>
        <button className="modal-btn" onClick={close}>
          X
        </button>
        <div>
          {currentForm === 'login' && <Login onFormChange={handleFormChange} />}
          {currentForm === 'register' && (
            <Register onFormChange={handleFormChange} />
          )}
          {currentForm === 'hello' && <HelloUser name={userName} />}
          {currentForm === 'exist' && <UserExist/>}
        </div>
      </div>
    </div>
  )
}

export default UserDetails
