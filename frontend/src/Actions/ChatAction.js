import * as ChatAPI from "../API/ChatRequest";

export const getChats = (formdata) => async(dispatch) => {
    const {data} = await ChatAPI.getChats(formdata)
    dispatch({type: "GET_CHATS", data:data})
}

export const createGroup = (formdata) => async(dispatch) => {
    const {data} = await ChatAPI.createGroup(formdata)
}