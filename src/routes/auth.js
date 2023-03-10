import express from 'express';

import AuthController from '../controllers/AuthController.js'
// import { userValidator } from '../utils/dataValidator.js'


const router = express.Router();

router.get("/login/success", (req, res) => {
    if (req.user) {
        res.status(200).json({
            success: true,
            user: req.user
        });
    }
    else res.json({ success: false, message: 'You are not logged in' })
});

router.post('/login', AuthController.login)
router.post('/register', AuthController.register)
router.post('/logout', AuthController.logout)

export default router