import razorpay from "../config/razorpay.js";
import crypto from "crypto";
import db from "../config/db.js";

// Create Razorpay Order
export const createOrder = async (req, res) => {
  try {
    const { amount } = req.body;

    //run if amount is null
    if (!amount || isNaN(amount)) {
      return res.status(400).json({
        success: false,
        message: "Valid amount is required"
      });
    }

    // razorpay requirements to create order
    const options = {
      amount: Number(amount) * 100, 
      currency: "INR",
      receipt: "receipt_" + Date.now(),
    };

    //creating order
    const order = await razorpay.orders.create(options);
    res.json(order);
  } catch (error) {
    console.error("FULL ERROR:", error)
    console.log("KEY:",razorpay.key_secret)
    console.error("RAZORPAY ERROR:", error?.response?.data)
    res.status(500).json({ error: "Order creation failed" })


  }
};

// Verify Payment and Insert Donation
export const verifyPayment = (req, res) => {
  const {
    razorpay_order_id,
    razorpay_payment_id,
    razorpay_signature,
    name,
    email,
    amount,
  } = req.body;

  const secret = razorpay.key_secret;

  const generated_signature = crypto
    .createHmac("sha256", secret)
    .update(razorpay_order_id + "|" + razorpay_payment_id)
    .digest("hex");

    //checking request signature and currentlt created signature are same or not
  if (generated_signature === razorpay_signature) {
    
    //insert into database after completing payment
    const sql =
      "INSERT INTO donations (user_name, user_email, amount) VALUES (?, ?, ?)";

    db.query(sql, [name, email, amount], (err, result) => {
      if (err) return res.status(500).json(err);

      res.json({ message: "Payment Successful & Donation Saved" });
    });
  } else {
    res.status(400).json({ error: "Payment verification failed" });
  }
};
