import React from 'react'

import './UserDM.css'

const UserDM = ({username}) => {
  return (
    <div className="UserDM">
        <img src="https://thumbs.dreamstime.com/b/white-people-logo-group-icon-group-people-group-users-dark-background-people-logo-group-icon-group-people-group-133800107.jpg" alt="" />
        <div className="Details">
            <h3>{username}</h3>
            <h4>Status</h4>
        </div>
    </div>
  )
}

export default UserDM