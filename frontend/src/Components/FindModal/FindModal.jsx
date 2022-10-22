import React, { useState } from 'react'
import { Modal, useMantineTheme } from "@mantine/core";
import { UilSearch } from '@iconscout/react-unicons'

import './FindModal.css'
import UserDM from '../UserDM/UserDM';
import { useDispatch, useSelector } from 'react-redux'

import { findUser } from '../../Actions/UserAction';

const FindModal = ({ modalOpened, setModalOpened }) => {

    const dispatch = useDispatch();

    const userdata = useSelector((state) => state.userReducer.users)

    const [data, setData] = useState({
        username: ""
    })

    const handleChange = (event) => {
        setData({...data, [event.target.name]: event.target.value})
        dispatch(findUser(data))
    }

    const theme = useMantineTheme();
    theme.colorScheme = 'dark';

    return (
        <Modal
            overlayColor={
            theme.colorScheme === "dark"
                ? theme.colors.dark[9]
                : theme.colors.gray[2]
            }
            overlayOpacity={0.55}
            overlayBlur={3}
            size="55%"
            opened={modalOpened}
            centered
            onClose={() => setModalOpened(false)}
        >   
            <div className="SearchModal">
                <div className="Top">
                    < UilSearch />
                    <input type="text" name="username" value={data.username} data-autofocus onChange={handleChange}/>

                </div>
                <div className="Users">
                    {userdata.users.map((u, id) => {
                        return <UserDM username={u.username} key={id}/>
                    })}
                </div>
            </div>
        </Modal>
    );
}

export default FindModal