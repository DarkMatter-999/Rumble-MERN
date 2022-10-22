import React, { useState } from 'react'
import FindModal from '../FindModal/FindModal'

import './SearchBar.css'

const SearchBar = () => {
  const [modalOpened, setModalOpened] = useState(false);
  
  return (
    <div className="SearchBar">
        <input type="text" placeholder='Find or start a conversation' onClick={() => setModalOpened(true)}/>
        <FindModal modalOpened={modalOpened} setModalOpened={setModalOpened} />
    </div>
  )
}

export default SearchBar