import { Router } from "express"
import { getAllContacts, getAllUsers } from "../controller/adminController.js";

const router=Router();


router.get('/users',getAllUsers);
router.get('/contact',getAllContacts)


export default router;