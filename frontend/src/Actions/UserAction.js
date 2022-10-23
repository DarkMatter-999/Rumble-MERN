import * as UserAPI from "../API/UserRequest";

export const findUser = (formdata) => async(dispatch) => {
    dispatch({type: "SEARCH_USER"})

    try {
        const {data} = await UserAPI.findUser(formdata)
        dispatch({type: "GOT_USER", data:data})

    } catch (error) {
        dispatch({type: "SEARCH_USER_FAIL"})
    }
}

export const friendUser = (id, data) => async(dispatch)=> {
    dispatch({type: "FRIEND_USER", data: id})
    UserAPI.friendUser(id, data)
}

export const unfriendUser = (id, data) => async(dispatch)=> {
    dispatch({type: "UNFRIEND_USER", data: id})
    UserAPI.unfriendUser(id, data)
}

export const getFriends = (formdata) => async(dispatch) => {
    const {data} = await UserAPI.getFriends(formdata)
    dispatch({type: "GET_FRIENDS", data:data})
}