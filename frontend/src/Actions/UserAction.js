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