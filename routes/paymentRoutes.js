import express from "express";
import {
  createOrder,
  verifyPayment,
} from "../controllers/paymentController.js";

const router = express.Router();


//create razorpay order
router.post("/create-order", createOrder);

//verify payment
router.post("/verify", verifyPayment);

export default router;
