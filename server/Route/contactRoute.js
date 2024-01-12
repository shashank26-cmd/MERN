import { Router } from "express";
import { contactForm } from "../controller/ContactController.js";


const router=Router();
router.post('/contact',contactForm);

export default router;