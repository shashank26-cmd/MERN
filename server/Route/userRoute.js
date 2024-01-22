import { Router } from "express";
import { login, register,get } from "../controller/userController.js";
import { authMiddleware } from "../middlewares/auth-middleware.js";

const router=Router();

router.post('/register',register);
router.post('/login',login);

router.get('/me', authMiddleware, get);


export default router;