import * as AuthAPI from '../API/AuthRequest.js'

export const login = (formdata) => async (dispatch) => {
    dispatch({type: "AUTH_START"})
    try {
        const { data } = await AuthAPI.login(formdata)
        dispatch({type: "AUTH_SUCCESS", data:data})
    } catch (error) {
        dispatch({type: "AUTH_FAIL"})
        console.log(error);
    }
}

export const signUp = (formdata) => async (dispatch) => {
    dispatch({type: "AUTH_START"})
    try {
        const { data } = await AuthAPI.signUp(formdata)
        dispatch({type: "AUTH_SUCCESS", data:data})
    } catch (error) {
        dispatch({type: "AUTH_FAIL"})
        console.log(error);
    }
}

export const logout = () => async (dispatch) => {
    dispatch({type: "LOG_OUT"})
}