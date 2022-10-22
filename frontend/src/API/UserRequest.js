import axios from 'axios'

const API = axios.create({baseURL: process.env.REACT_APP_API_URL})

API.interceptors.request.use((req) => {
    if(localStorage.getItem('profile')) {
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`
    }

    return req
})

export const findUser = (formdata) => API.post('/api/user/find', formdata)