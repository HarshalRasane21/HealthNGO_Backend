
//Establishes MySQL connection using mysql2
import mysql from "mysql2"

// Establish connection using with mysql data
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "health_ngo",
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
