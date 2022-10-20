import express from 'express'
import bodyParser from "body-parser";
import mongoose from "mongoose";
import dotenv from 'dotenv'
import cors from 'cors'

import Auth from './Routes/Auth.js'
import User from './Routes/User.js'

dotenv.config()

const app = express()

// Middleware
app.use(bodyParser.json({ limit: '30mb', extended: true}))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true}))
app.use(cors())

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then( () => {
    app.listen(process.env.PORT || 5000)
})

app.use('/api/auth', Auth)
app.use('/api/user', User)