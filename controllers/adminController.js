import db from "../config/db.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import * as adminModel from "../models/adminModel.js"


// admin login

export const loginAdmin = (req, res) => {

  const jwt_key= process.env.JWT_Key;

  const { email, password } = req.body;

  //sending credentials and collecting result
  adminModel.loginAdmin({ email }, async (err, results) => {
    if (err) return res.status(500).json(err);

    if (results.length === 0) {
      return res.status(401).json({ message: "Invalid Credentials" });
    }

    const admin = results[0];

    //compare database store hash password with enter password using bcrypt
    const validPassword = await bcrypt.compare(password, admin.password);

    if (!validPassword) {
      return res.status(401).json({ message: "Invalid Credentials" });
    }

    //create token
    const token = jwt.sign(
      { id: admin.id, email: admin.email },
      jwt_key,
      { expiresIn: "10m" },
    );

    //sending response with jwt token
    res.json({
      message: "Login Successful",
      token,
    });
  });
};
