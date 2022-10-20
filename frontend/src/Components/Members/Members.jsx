import React from 'react'
import Member from '../Member/Member'

import './Members.css'

const Members = () => {
  return (
    <div className="Members">
        <div>
        <Member name={"NameOne"} />
        <Member name={"NameTwo"} />
        <Member name={"NameTHree"} />
        <Member name={"NameFour"} />
        <Member name={"NameFive"} />
        </div>
    </div>
  )
}

export default Members