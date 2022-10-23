import express from "express";
import { addMessage, getMessages } from "../Controllers/MessageController.js";
import authMiddleware from "../Middlewares/AuthMiddleware.js";

const router = express.Router()

router.post('/', authMiddleware ,addMessage)
router.get('/', getMessages)

export default router