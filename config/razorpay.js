//creating razorpay object
import Razorpay from "razorpay";
import dotenv from "dotenv";

dotenv.config();

//store razorpay id and secret key
const razorpay = new Razorpay({
  key_id: process.env.key_id,
  key_secret: process.env.key_secret,
});

export default razorpay;
