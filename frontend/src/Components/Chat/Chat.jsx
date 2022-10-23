import React from 'react'
import { useSelector } from 'react-redux'
import Members from '../Members/Members'
import Message from '../Message/Message'
import MessageBox from '../MessageBox/MessageBox'
import Title from '../Title/Title'

import './Chat.css'

const Chat = () => {

  const {messages} = useSelector((state) => state.messageReducer)
  
  const {friends} = useSelector((state) => state.userReducer)
  
  const {user} = useSelector((state) => state.authReducer.authData)
  return (
    <div className="Chat">
        <Title />
        <hr />
        <div className="ChatViewPort">
          <div className="ChatMain">
            <div className='MessageContainer'>
                {messages && messages.map((m) => {
                    return <Message sender={friends[m.senderId]? friends[m.senderId].username : user._id===m.senderId? user.username : m.senderId} msg={m.text} key={m._id} />
                })}
            </div>
            <MessageBox />
          </div>
          <Members />
        </div>
    </div>
  )
}

export default Chat