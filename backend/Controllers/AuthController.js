import UserModel from "../Models/UserModel.js"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export const registerUser = async (req, res) => {
    const salt = await bcrypt.genSalt(10)

    const Hashedpasswd = await bcrypt.hash(req.body.passwd, salt)
    req.body.passwd = Hashedpasswd

    const {username} = req.body

    try {

        const exists = await UserModel.findOne({username})

        if(exists) {
            res.status(400).json("Username already registered")
        } else {
            const newUser = new UserModel(req.body)
            
            const user = await newUser.save()

            const token = jwt.sign({
                username: user.username,
                id: user._id,
            },process.env.TOKEN_SECRET, {
                expiresIn: '10h'
            })

            res.status(200).json({user, token})
        }
        
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

export const loginUser = async (req, res) => {
    const {username, passwd} = req.body

    try {
        const user = await UserModel.findOne({username})

        if(user) {
    
            const valid = await bcrypt.compare(passwd, user.passwd)
            
            if(!valid) {
                res.status(400).json("Wrong username or password") 
            } else {
                const token = jwt.sign({
                    username: user.username,
                    id: user._id,
                },
                process.env.TOKEN_SECRET,
                {
                    expiresIn: '10h'
                })

                res.status(200).json({user, token})
            }
        } else {
            res.status(404).json("User does not exists")
        }
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}