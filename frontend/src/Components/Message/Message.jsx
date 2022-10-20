import React from 'react'

import './Message.css'

const Message = ({sender, msg}) => {
  return (
    <div className='Message'>
      <div className="Sender">
        <div className="SenderImg">
          <img src="https://thumbs.dreamstime.com/b/white-people-logo-group-icon-group-people-group-users-dark-background-people-logo-group-icon-group-people-group-133800107.jpg" alt="" />
        </div>
      <div>
        <div className="SenderName">
          {sender}
        </div>
        <div className="msg">
          {msg}
        </div>
      </div>
      </div>
    </div>
  )
}

export default Message