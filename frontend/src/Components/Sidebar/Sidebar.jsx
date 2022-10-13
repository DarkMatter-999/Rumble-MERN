import React from 'react'

import './Sidebar.css'

import {groups} from '../../data/serverdummy.js'
import GroupIcon from '../GroupIcon/GroupIcon'

const Sidebar = () => {
  const friends = {
    name:"Friends",
    img: "https://thumbs.dreamstime.com/b/white-people-logo-group-icon-group-people-group-users-dark-background-people-logo-group-icon-group-people-group-133800107.jpg"
  }
  return (
    <div className="Sidebar">
        <GroupIcon data={friends} />
        <hr />
        {groups.map((data, id) => {
            return (
                <GroupIcon key={id} data={data} />
            )
        }) }
    </div>
  )
}

export default Sidebar