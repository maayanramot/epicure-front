import React, { useState } from 'react'

interface ILogin {
  onFormChange: (form: string, lastUserName: string) => void
}

const Login: React.FC<ILogin> = ({ onFormChange }) => {
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')

  const loginUser = {
    email: email,
    password: pass,
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    try {
      const response = await fetch(
        'http://localhost:8000/epicure/users/login',
        {
          method: 'POST',
          body: JSON.stringify(loginUser),
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        },
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data, 'userRegister')
          if (data.status === 'ok') {
            alert('login successful')
            window.localStorage.setItem('token', data.data)
            // window.location.href="./userDetails"
          } else {
            throw new Error('login does NOT successful')
          }
        })
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="sign-in-content">
      <div className="user-input">
        <h1>Sign in</h1>
        <h2>To continue the order, please sign in</h2>
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
      <div className="login-btn">
        <button type="submit">LOGIN</button>
        <label>Forget password?</label>
      </div>
      <div className="or">
        <div
          style={{
            width: '9vw',
            height: '0.5px',
            backgroundColor: '#979797',
          }}
        ></div>
        <p>or</p>
        <div
          style={{
            width: '9vw',
            height: '0.5px',
            backgroundColor: '#979797',
          }}
        ></div>
      </div>
      <div className="sign-up">
        <button onClick={() => onFormChange('register', '')}>SIGN UP</button>
      </div>
    </form>
  )
}

export default Login
