import React from 'react'

interface IUserName {
  firstName?: string
}

const UserName: React.FC<IUserName> = ({ firstName }) => {
  return <span>Hello, {firstName}</span>
}

export default UserName
