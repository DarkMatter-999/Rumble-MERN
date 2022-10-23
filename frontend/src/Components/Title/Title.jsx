import React from 'react'
import { useSelector } from 'react-redux'

import './Title.css'

const Title = () => {
  const { name } = useSelector((state) => state.messageReducer)
  return (
    <div className="Title">
        <h3>{name}</h3>
    </div>
  )
}

export default Title