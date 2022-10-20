import UserModel from "../Models/UserModel.js"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export const getUser = async (req, res) => {
    const id = req.params.id

    try {
        const user = await UserModel.findById(id).select("-passwd")

        if(user) {
            res.status(200).json(user)
        } else {
            res.status(404).json("User not found")
        }
        
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

export const updateUser = async (req, res) => {
    const id = req.params.id

    const { id_, passwd } = req.body

    if(id_ === id) {
        try {
            if(passwd) {
                const user = await UserModel.findById(id_)
                
                const valid = await bcrypt.compare(passwd, user.passwd)

                const salt = await bcrypt.genSalt(10)
                req.body.passwd = await bcrypt.hash(passwd, salt)

                if(!valid) {
                    res.status(400).json("Could not update User")
                } else {
                    const user = await UserModel.findByIdAndUpdate(id, req.body, {new: true}).select("-passwd")

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
            }
        } catch (error) {
            res.status(500).json({message: error.message})
        }
    } else {
        res.status(403).json("Access Denied")
    }
}

export const deleteUser = async (req, res) => {
    const id = req.params.id

    const { id_, username, passwd } = req.body
    console.log(req.body);
    if(id_ === id) {
        try {
            if(passwd) {
                const user = await UserModel.findById(id_)
                
                const valid = await bcrypt.compare(passwd, user.passwd)

                if(!valid) {
                    res.status(400).json("Could not update User")
                } else {
                    const delUser = await UserModel.findByIdAndDelete(user.id)

                    res.status(200).json("User deleted successfully")
                }
            }
        } catch (error) {
            res.status(500).json({message: error.message})
        }
    } else {
        res.status(403).json("Access Denied")
    }
}

export const friendUser = async (req, res) => {

}

export const unfriendUser = async (req, res) => {

}
