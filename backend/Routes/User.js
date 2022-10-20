import express from 'express'
import { deleteUser, getUser, updateUser } from '../Controllers/UserController.js'

const router = express.Router()

router.get('/:id', getUser)
router.put('/:id', updateUser)
router.delete('/:id', deleteUser)
// router.put('/:id/friend', friendUser)
// router.put('/:id/unfriend', unfriendUser)

export default router
