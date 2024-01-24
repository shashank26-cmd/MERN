import { Router } from "express";
import { Services}  from "../controller/serviceController.js"

const route=Router();


route.get("/service",Services);

export default route;