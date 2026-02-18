import express from "express"
const router = express.Router();
import {subscribe, getSubscribers} from "../controllers/newsletterController.js"


//create subscribe
router.post("/", subscribe);

//get subscribers
router.get("/", getSubscribers);

export default router;
