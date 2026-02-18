import express from "express"
const router = express.Router();
import {createDonation, getDonations, totaldonation} from "../controllers/donationController.js"

//create donation
router.post("/", createDonation);

//get donations
router.get("/", getDonations);

//get totaldonations as number
router.get("/totaldonation", totaldonation);


export default router;
