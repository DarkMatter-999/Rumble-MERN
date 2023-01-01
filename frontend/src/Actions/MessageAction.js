import * as MessageAPI from "../API/MessageRequest";

export const getMessages = (chatId) => async(dispatch) => {
    const {data} = await MessageAPI.getMessages(chatId)
    dispatch({type:"LOAD_MESSAGES", data:data})
}

export const getTitle = (title) => async(dispatch) => {
    dispatch({type:"LOAD_TITLE", data:title})
}

export const getChatID = (id) => async(dispatch) => {
    dispatch({type:"GET_CHAT_ID", data:id})
}

export const getMembers = (members) => async(dispatch) => {
    dispatch({type: "GET_CHAT_MEMBERS", data:members})
}

export const sendMessage = async (formdata) => {
    await MessageAPI.sendMessage(formdata)
}