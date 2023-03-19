import React, { MouseEventHandler } from 'react'
import './DishModal.css'

import spicy from '../../../assets/icons/spicy.png'
import vegiterian from '../../../assets/icons/vegiterian.png'
import vegan from '../../../assets/icons/vegan.png'
import ILS from '../../../assets/icons/shekel.png'

interface IDishModal {
  id:string
  src: string
  name: string
  ingredients: string
  isSpicy: boolean
  isVegan: boolean
  isVegi: boolean
  price: string
  sides: string[] | undefined
  changes: string[] | undefined
  close: MouseEventHandler<HTMLButtonElement>
}

const DishModal: React.FC<IDishModal> = ({
  id,
  src,
  name,
  ingredients,
  isSpicy,
  isVegan,
  isVegi,
  price,
  sides,
  changes,
  close,
}) => {

  // const handleDelete = async (id) => {
  //   await 
  // }

  return (
    <div className="dish-modal">
      <div>
        <button className="modal-btn" onClick={close}>
          X
        </button>
        <div className="modal-content">
          <img src={src} alt={name}></img>
          <div className="dish-modal-head">
            <h1>{name}</h1>
            <h2>{ingredients}</h2>
            <div className="kind">
              {isSpicy ? <img src={spicy} alt="spicy icon"></img> : <></>}
              {isVegi ? <img src={vegiterian} alt="vegi icon"></img> : <></>}
              {isVegan ? <img src={vegan} alt="vegan icon"></img> : <></>}
            </div>
            <div className="price">
              <div
                style={{
                  width: '8vw',
                  height: '1px',
                  backgroundColor: 'black',
                }}
              ></div>
              <img src={ILS} alt="shekel icon"></img>
              <h3>{price}</h3>
              <div
                style={{
                  width: '8vw',
                  height: '1px',
                  backgroundColor: 'black',
                }}
              ></div>
            </div>
          </div>
          <div className="input-form">
            <h1>Choose a side</h1>
            {sides?.map((side: string, index: number) => {
              return (
                <div className="choose-form" key={index}>
                  <input type="radio" value={side}></input>
                  <label>{side}</label>
                </div>
              )
            })}
          </div>
          <div className="input-form">
            <div className="center">
              <h1>Changes</h1>
            </div>
            {changes?.map((changeOption: string, index: number) => {
              return (
                <div className="choose-form" key={index}>
                  <input type="checkbox" value={changeOption}></input>
                  <label>{changeOption}</label>
                </div>
              )
            })}
          </div>
          <div className="input-form center">
            <h1>Quantity</h1>
            <div className="quantity">
              <button>-</button>
              <label>1</label>
              <button>+</button>
            </div>
          </div>
          <button className="add">ADD TO BAG</button>
          <button className="add">Delete Dish</button>
        </div>
      </div>
    </div>
  )
}

export default DishModal
