const userReducer = (state = {users:null, loading:false, error:false}, action) => {
    switch(action.type) {
        case "SEARCH_USER":
            return {...state, loading:true, error:false}
        case "GOT_USER":
            localStorage.setItem("users", JSON.stringify({...action?.data}))
            return {...state, users:action.data, loading: false, error: false}
        case "SEARCH_USER_FAIL":
            return {...state, error:true}
        default:
            return state
    }
}

export default userReducer