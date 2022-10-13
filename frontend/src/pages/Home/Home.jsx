import React from 'react'
import Channels from '../../Components/Channels/Channels'
import Chat from '../../Components/Chat/Chat'
import Sidebar from '../../Components/Sidebar/Sidebar'

import './Home.css'

const Home = () => {
  return (
    <div className="Home">
        <Sidebar />
        <Channels />
        <Chat />
    </div>
  )
}

export default Home