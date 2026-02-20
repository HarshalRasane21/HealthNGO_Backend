import jwt from "jsonwebtoken";

// verify admin
export const verifyAdmin = (req, res, next) => {

  const jwt_key= process.env.JWT_Key;


  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "Access Denied" });
  }

  try {
    //verifing admin with token and signature
    const verified = jwt.verify(token, jwt_key);
    req.admin = verified;
    next();
  } catch (err) {
    res.status(403).json({ message: "Invalid Token" });
  }
};
