import React, { useState } from 'react'
import {UilPlus} from '@iconscout/react-unicons'

import './GroupCreate.css'
import GroupCreateModal from '../GroupCreateModal/GroupCreateModal'

const GroupCreate = () => {
    const [openModal, setOpenModal] = useState(false);

    const createServer = () => {
        setOpenModal(true);
    }

  return (
            <div className="CreateIcon" >
                <div className="CreateImg" onClick={createServer}>
                    <UilPlus/>
                </div>
                {openModal && <GroupCreateModal closeModal={setOpenModal}/>}
            </div>

    )
}

export default GroupCreate