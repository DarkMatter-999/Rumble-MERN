import express from 'express'
import { deleteUser, findUser, friendUser, getUser, unfriendUser, updatePasswd, updateUser } from '../Controllers/UserController.js'

import authMiddleware from '../Middlewares/AuthMiddleware.js'

const router = express.Router()

router.get('/:id', authMiddleware, getUser)
router.put('/:id', authMiddleware, updateUser)
router.delete('/:id', authMiddleware, deleteUser)

router.put('/:id/updatepw', authMiddleware, updatePasswd)
router.put('/:id/friend', authMiddleware, friendUser)
router.put('/:id/unfriend', authMiddleware, unfriendUser)
router.post('/:id', authMiddleware, findUser)

export default router
