import mongoose from 'mongoose'

const userSchema = mongoose.Schema({
    username:  {
        type: String,
        required: true,
    },
    passwd:  {
        type: String,
        required: true,
    },
    profilePic: String,
    coverColor: String,
    friends: [],

}, {timestamps: true})

const UserModel = mongoose.model("Users", userSchema)

export default UserModel