import React from 'react'

import './Sidebar.css'

import GroupIcon from '../GroupIcon/GroupIcon'

import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getChats } from '../../Actions/ChatAction'

const Sidebar = () => {
  const friends = {
    name:"Friends",
    img: "https://thumbs.dreamstime.com/b/white-people-logo-group-icon-group-people-group-users-dark-background-people-logo-group-icon-group-people-group-133800107.jpg"
  }

  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.authReducer.authData);

  const {chats} = useSelector((state) => state.chatReducer);

  useEffect(() => {
    dispatch(getChats())
  }, [user])

  return (
    <div className="Sidebar">
        <GroupIcon data={friends} />
        <hr />
        {chats && chats.map((data) => {
            return (
                <GroupIcon key={data._id} data={data} />
            )
        }) }
    </div>
  )
}

export default Sidebar