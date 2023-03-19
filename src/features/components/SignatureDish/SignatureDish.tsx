import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Istore } from '../../../services/interface'
import { dishFilter } from '../../../store/slices/dishesSlice'
import DishCardGrid from '../DishCardGrid/DishCardGrid'
import './SignatureDish.css'

const SignatureDish: React.FC = () => {
  const dispatch = useDispatch()
  const filter = useSelector((state: Istore) => state.dishes.value)

  useEffect(() => {
    dispatch(dishFilter('signature'))
  }, [dispatch])

  return (
    <div className="center">
      <div className="signature">
        <p>SIGNATURE DISH OF:</p>
        <div>
          <DishCardGrid filter={filter} />
        </div>
      </div>
    </div>
  )
}
export default SignatureDish
