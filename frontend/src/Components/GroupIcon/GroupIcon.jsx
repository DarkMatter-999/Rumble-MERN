import React from 'react'

import './GroupIcon.css'

const GroupIcon = ({data}) => {
  return (
    <div className="GroupIcon">
        <div className="GroupImg">
            <img src={data.img} alt="" />
        </div>
    </div>
  )
}

export default GroupIcon