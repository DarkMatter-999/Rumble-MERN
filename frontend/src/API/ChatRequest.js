import axios from 'axios'

const API = axios.create({baseURL: process.env.REACT_APP_API_URL})

API.interceptors.request.use((req) => {
    if(localStorage.getItem('profile')) {
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`
    }

    return req
})

export const getChats = (formdata) => API.post('/api/chat/get', formdata)

export const createGroup = (formdata) => API.post('/api/chat', formdata)