import express from "express";
import { loginAdmin } from "../controllers/adminController.js";
import { verifyAdmin } from "../middleware/authMiddleware.js";

const router = express.Router();

//login route
router.post("/login", loginAdmin);

// protected route / verify admin
router.get("/dashboard", verifyAdmin, (req, res) => {
  res.json({ message: "Welcome Admin Dashboard" });
});

export default router;
