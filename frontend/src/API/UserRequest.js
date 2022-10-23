import axios from 'axios'

const API = axios.create({baseURL: process.env.REACT_APP_API_URL})

API.interceptors.request.use((req) => {
    if(localStorage.getItem('profile')) {
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`
    }

    return req
})

export const findUser = (formdata) => API.post('/api/user/find', formdata)

export const friendUser = (id,data)=> API.put(`/api/user/${id}/friend`, data)
export const unfriendUser = (id,data)=> API.put(`/api/user/${id}/unfriend`, data)

export const getUser = (id) => API.get(`/api/user/${id}`)
export const getFriends = (data) => API.post(`/api/user/friends`, data)