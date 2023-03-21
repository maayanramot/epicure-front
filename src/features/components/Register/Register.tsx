import React, { useState } from 'react'

interface IRegister {
  onFormChange: (form: string, lastUserName: string) => void
}

const Register: React.FC<IRegister> = ({ onFormChange }) => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')

  const newUser = {
    firstName: firstName,
    lastName: lastName,
    email: email,
    password: pass,
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    try {
      const response = await fetch(
        'http://localhost:8000/epicure/users',
        // 'https://web-server-hmw0.onrender.com/epicure/users',
        {
          method: 'POST',
          body: JSON.stringify(newUser),
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        },
      )
      if (response.ok) {
        onFormChange('hello', firstName)
      } else {
        onFormChange('exist', firstName)
        throw new Error('Error to register, user already exist')
      }
    } catch (e) {
      console.log('Error')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="sign-in-content">
      <div className="user-input">
        <h1>Register</h1>
        <h2>To continue the order, please register</h2>
        <input
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          type="text"
          placeholder="First Name"
        ></input>
        <input
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          type="text"
          placeholder="Last Name"
        ></input>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Email address"
        ></input>
        <input
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          type="password"
          placeholder="Password"
        ></input>
      </div>
      <div className="sign-up">
        <button type="submit">SIGN UP</button>
      </div>
    </form>
  )
}

export default Register
