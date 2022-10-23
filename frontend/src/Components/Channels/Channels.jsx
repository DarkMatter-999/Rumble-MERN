import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getFriends } from '../../Actions/UserAction'
import SearchBar from '../SearchBar/SearchBar'
import UserDM from '../UserDM/UserDM'

import './Channels.css'

const Channels = () => {
  const { user } = useSelector((state) => state.authReducer.authData);

  const dispatch = useDispatch();

  const friends = useSelector((state) => state.userReducer.friends);

  useEffect(() => {
      dispatch(getFriends(user))
  }, [user])

  return (
    <div className="Channels">
        <SearchBar />
        <hr />
        {user.friends.map((friend, id) => {
          return <UserDM username={friends[friend].username} key={id} />
        })}
    </div>
  )
}

export default Channels