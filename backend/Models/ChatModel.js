import mongoose from 'mongoose'

const chatSchema = mongoose.Schema({
    name:  {
        type: String,
        required: true,
    },
    members: {
        type: Array
    }

}, {timestamps: true})

const ChatModel = mongoose.model("chats", chatSchema)

export default ChatModel