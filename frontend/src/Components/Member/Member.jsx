import React from 'react'

import './Member.css'

const Member = ({name}) => {
  return (
    <div className="Member">
        <div className="Img">
        <img src="https://thumbs.dreamstime.com/b/white-people-logo-group-icon-group-people-group-users-dark-background-people-logo-group-icon-group-people-group-133800107.jpg" alt="" />
            <div className="OnlineStatus"></div>
        </div>
        <div className='Name'>{name}</div>
    </div>
  )
}

export default Member