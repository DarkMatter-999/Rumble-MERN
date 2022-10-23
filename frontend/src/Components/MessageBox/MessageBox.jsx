import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { sendMessage } from '../../Actions/MessageAction';

import './MessageBox.css'

const MessageBox = () => {

  const {user} = useSelector((state) => state.authReducer.authData);
  const {chat} = useSelector((state) => state.messageReducer);

  const initialData = {
    text: "",
    chatId: chat,
    senderId: user._id,
  }

  const [data, setData] = useState(initialData)

  useEffect(() => {
    const listener = event => {
      if (event.code === "Enter" || event.code === "NumpadEnter") {
        event.preventDefault();
        sendMessage(data)

        setData(initialData)
      }
    };
    document.addEventListener("keydown", listener);
    return () => {
      document.removeEventListener("keydown", listener);
    };
  }, [data.text]);

  const handleChange = (event) => {
    setData({...data, [event.target.name]: event.target.value})
  }

  return (
    <div className="MessageBox">
        <input type="text" value={data.text} name="text" placeholder="Find or start a conversation" onChange={handleChange} />
    </div>
  )
}

export default MessageBox