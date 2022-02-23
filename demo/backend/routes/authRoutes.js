import express from 'express';
import { registerUser, loginUser, getMe } from '../controllers/authControllers.js'
import protect from '../middleware/authMiddleware.js';
const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.post('/me',protect ,  getMe)

export default router;
