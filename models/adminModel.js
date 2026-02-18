/* admin model */
import db from "../config/db.js"


//login admin
export const loginAdmin = (data, callback) => {
    const sql = "SELECT * FROM admin WHERE email = ? ";
    db.query(sql, [data.email], callback);
}