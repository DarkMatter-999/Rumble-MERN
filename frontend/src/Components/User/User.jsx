import React from 'react'
import { UilCheck, UilTimes } from '@iconscout/react-unicons'

import './User.css'
import { useDispatch, useSelector } from 'react-redux';
import { friendUser, unfriendUser } from '../../Actions/UserAction';

const User = ({u}) => {

  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.authReducer.authData);

  const handleFriend = () => {
    if(!user.friends.includes(u._id)) {
        dispatch(friendUser(u._id, user))
    } else {
        dispatch(unfriendUser(u._id, user))
    }
}
  return (
    <div className="User">
        <img src="https://thumbs.dreamstime.com/b/white-people-logo-group-icon-group-people-group-users-dark-background-people-logo-group-icon-group-people-group-133800107.jpg" alt="" />
        <div className="Details">
            <h3>{u.username}</h3>
            <h4>Status</h4>
        </div>
      {user.friends.includes(u._id)? 
        <div className="Unfriend" onClick={handleFriend}>
            <UilTimes />
        </div>
        :
        <div className="Friend" onClick={handleFriend}>
            <UilCheck />
        </div>
        }
    </div>
  )
}

export default User