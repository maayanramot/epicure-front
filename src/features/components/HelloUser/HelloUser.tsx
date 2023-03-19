import React from 'react'

interface IHelloUser {
  name: string
}

const HelloUser: React.FC<IHelloUser> = ({ name }) => {
  return (
    <form className="sign-in-content successfully-registered">
      <div className="user-input successfully-registered">
        <h1>Thank you, {name} !</h1>
        <h2>You have successfully registered</h2>
      </div>
    </form>
  )
}

export default HelloUser
