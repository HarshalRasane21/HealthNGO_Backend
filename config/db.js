import dotenv from "dotenv";
dotenv.config();

//Establishes MySQL connection using mysql2
import mysql from "mysql2"

import fs from "fs";
// Establish connection using with mysql data
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  ssl: {
    ca: fs.readFileSync(process.env.CA)
  }
});

// Handle error during connection
db.connect((err) => {
  if (err) {
    console.error("Database connection failed:", err);
  } else {
    console.log("MySQL Connected Successfully");
  }
});
export default db;
