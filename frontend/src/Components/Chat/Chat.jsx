import React from 'react'
import Members from '../Members/Members'
import Message from '../Message/Message'
import MessageBox from '../MessageBox/MessageBox'
import Title from '../Title/Title'

import './Chat.css'

const Chat = () => {
  return (
    <div className="Chat">
        <Title />
        <hr />
        <div className="ChatViewPort">
          <div className="ChatMain">
            <div className='MessageContainer'>
                
            </div>
            <MessageBox />
          </div>
          <Members />
        </div>
    </div>
  )
}

export default Chat