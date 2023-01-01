import React from 'react'
import { useSelector } from 'react-redux'
import Member from '../Member/Member'

import './Members.css'

const Members = () => {

  const {user} = useSelector((state) => state.authReducer.authData)

  const {members} = useSelector((state) => state.messageReducer)

  const {friends} = useSelector((state) => state.userReducer)

  return (
    <div className="Members">
        <div>
        <Member name={user.username} />
        {members&& members.map((m, id) => {
          return m===user._id? "" : <Member name={friends[m]? friends[m].username : "none"} key={id} />
        })}
        </div>
    </div>
  )
}

export default Members