import React from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createGroup } from '../../Actions/ChatAction';

import './GroupCreateModal.css'

const GroupCreateModal = ({closeModal}) => {

    const user = useSelector((state) => state.authReducer.authData)

    const dispatch = useDispatch();

    const initialState = {
        "name": "",
        "_id": user._id,
    }

    const [data, setData] = useState(initialState)

    const handleChange = (event) => {
        setData({...data, [event.target.name]: event.target.value})
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        dispatch(createGroup(data))
    }
    
  return (
    <div className='modalBackground'>
        <div className="modalContainer">
            <div className="btnContainer">
                <button onClick={() => closeModal(false)} className='closeButton'>
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 15 15"><path fill="currentColor" d="M3.64 2.27L7.5 6.13l3.84-3.84A.92.92 0 0 1 12 2a1 1 0 0 1 1 1a.9.9 0 0 1-.27.66L8.84 7.5l3.89 3.89A.9.9 0 0 1 13 12a1 1 0 0 1-1 1a.92.92 0 0 1-.69-.27L7.5 8.87l-3.85 3.85A.92.92 0 0 1 3 13a1 1 0 0 1-1-1a.9.9 0 0 1 .27-.66L6.16 7.5L2.27 3.61A.9.9 0 0 1 2 3a1 1 0 0 1 1-1c.24.003.47.1.64.27Z"/></svg>
                </button>
            </div>
            <div className="modalTitle">
                Create a Server
            </div>
            <div className="modalForm">
                <form onSubmit={handleSubmit}>
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" placeholder='Group Name..' onChange={handleChange} />
                    <button type='submit'>Create</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default GroupCreateModal