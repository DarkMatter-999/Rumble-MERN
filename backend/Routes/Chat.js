import express from 'express'
import { createServer, joinServer, leaveServer, userChats } from '../Controllers/ChatController.js'
import authMiddleware from '../Middlewares/AuthMiddleware.js'

const router = express.Router()

router.post('/', authMiddleware, createServer)
router.get('/:chatId', authMiddleware, userChats)
router.get('/:chatId/join', authMiddleware, joinServer)
router.post('/:chatId/leave', authMiddleware, leaveServer)

export default router
