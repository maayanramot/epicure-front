import React from 'react'
import './ChefCard.css'

import deleteBtn from '../../../assets/icons/delete.svg'

interface IChefCard {
  src: string
  name: string
  onClick: React.MouseEventHandler<HTMLDivElement>
  chefClickedId: string
}

const ChefCard: React.FC<IChefCard> = ({
  src,
  name,
  onClick,
  chefClickedId,
}) => {
  const deleteChef = async (chefClickedId: string) => {
    await fetch(
      `https://web-server-hmw0.onrender.com/epicure/chefs/${chefClickedId}`,
      {
        method: 'DELETE',
      },
    )
      .then((response) => {
        if (response.status === 200) {
          console.log('good')
        } else {
          console.log('not good')
        }
      })
      .catch((e) => console.log(e))
  }
  return (
    <div className="chef-card" onClick={onClick}>
      <button
        className="delete-button"
        onClick={() => deleteChef(chefClickedId)}
      >
        <img src={deleteBtn}></img>
      </button>
      <img src={src} alt="chef img"></img>
      <div className="frame">
        <p>{name}</p>
      </div>
    </div>
  )
}

export default ChefCard
