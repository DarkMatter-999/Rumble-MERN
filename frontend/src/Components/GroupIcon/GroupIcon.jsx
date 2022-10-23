import React from 'react'
import { useDispatch } from 'react-redux'
import { getChatID, getMessages, getTitle } from '../../Actions/MessageAction'

import './GroupIcon.css'

const GroupIcon = ({data}) => {
  const dispatch = useDispatch()

  const loadChat = () => {
    dispatch(getMessages(data._id))
    dispatch(getTitle(data.name))
    dispatch(getChatID(data._id))
  }
  return (
    <div className="GroupIcon" onClick={loadChat}>
        <div className="GroupImg">
            <img src="https://thumbs.dreamstime.com/b/white-people-logo-group-icon-group-people-group-users-dark-background-people-logo-group-icon-group-people-group-133800107.jpg" alt="" />
        </div>
    </div>
  )
}

export default GroupIcon