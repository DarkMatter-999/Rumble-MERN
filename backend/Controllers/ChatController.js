import ChatModel from "../Models/ChatModel.js"

export const createServer = async (req, res) => {
    const newServer = new ChatModel({
        name: req.body.name,
        members: [req.body._id]
    })

    try {
        const result = await newServer.save()
        res.status(200).json(result)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

export const userChats = async (req, res) => {
    try {
        const chat = await ChatModel.find({
            members: {$in: [req.params.userId]}
        })

        res.status(200).json(chat)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

export const joinServer = async (req, res) => {
    const chatId = req.params.chatId

    const {_id} = req.body

    try {
        const chat = await ChatModel.findById(chatId)

        if(!chat.members.includes(_id)) {
            await chat.updateOne({$push: {members: _id}})
            res.status(200).json("Joined server")
        } else {
            res.status(403).json("Already joined")
        }
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

export const leaveServer = async (req, res) => {
    const chatId = req.params.chatId

    const {_id} = req.body

    try {
        const chat = await ChatModel.findById(chatId)

        if(chat.members.includes(_id)) {
            await chat.updateOne({$pull: {members: _id}})
            res.status(200).json("Left server")
        } else {
            res.status(403).json("Not joined")
        }
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

export const getUserChats = async (req, res) => {
    const {_id} = req.body
    try {
        const chat = await ChatModel.find({
            members: {$in: [_id]}
        })
        res.status(200).json(chat)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}