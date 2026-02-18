/* donation model */
import db from "../config/db.js";


//create donation
export const createDonation = (data, callback) => {
  const sql = `
    INSERT INTO donations (user_name, user_email, amount)
    VALUES (?, ?, ?)
  `;
  db.query(sql, [data.user_name, data.user_email, data.amount], callback);
};


//get all donations
export const getDonations = (callback) => {
  db.query("SELECT * FROM donations ORDER BY created_at DESC", callback);
};


//get total donation as sum
export const totaldonation= (callback) => {
  db.query("SELECT SUM(amount) AS total FROM donations", callback);
}
