const messageReducer = (state = {name: null, chat:null, messages:null, members:null, loading:false, error:false}, action) => {
    switch(action.type) {
        case "LOAD_MESSAGES":
            return {...state, messages:action.data}
        case "LOAD_TITLE":
            return {...state, name:action.data}
        case "GET_CHAT_ID":
            return {...state, chat:action.data}
        case "GET_CHAT_MEMBERS":
            return {...state, members:action.data}
        default:
            return state
    }
}

export default messageReducer