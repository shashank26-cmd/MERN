import { Router } from "express"
import { getAllContacts, getAllUsers,deleteUser } from "../controller/adminController.js";
import {  adminMiddleware,authMiddleware } from "../middlewares/auth-middleware.js";



const router=Router();


router.get('/users',authMiddleware,getAllUsers);
router.get('/contact',authMiddleware,getAllContacts)

router.delete('/users/delete/:id',authMiddleware,adminMiddleware,deleteUser);


export default router;