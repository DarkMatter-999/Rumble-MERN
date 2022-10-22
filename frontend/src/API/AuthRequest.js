import axios from 'axios'

const API = axios.create({baseURL: process.env.REACT_APP_API_URL})

export const login = (formdata) => API.post('/api/auth/login', formdata)
export const signUp = (formdata) => API.post('/api/auth/register', formdata)