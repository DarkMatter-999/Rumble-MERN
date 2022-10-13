import React from 'react'
import SearchBar from '../SearchBar/SearchBar'
import UserDM from '../UserDM/UserDM'

import './Channels.css'

const Channels = () => {
  return (
    <div className="Channels">
        <SearchBar />
        <hr />
        <UserDM />
    </div>
  )
}

export default Channels