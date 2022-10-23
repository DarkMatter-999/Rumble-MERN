const chatReducer = (state = {chats:null, loading:false, error:false}, action) => {
    switch(action.type) {
        case "GET_CHATS":
            return {...state, chats:action.data}
        default:
            return state
    }
}

export default chatReducer