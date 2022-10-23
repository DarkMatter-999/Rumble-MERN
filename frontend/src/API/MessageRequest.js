import axios from 'axios'

const API = axios.create({baseURL: process.env.REACT_APP_API_URL})

API.interceptors.request.use((req) => {
    if(localStorage.getItem('profile')) {
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`
    }

    return req
})

export const getMessages = (chatId) => API.get('/api/message', { params: { chatId}})
export const sendMessage = (formdata) => API.post('/api/message', formdata)