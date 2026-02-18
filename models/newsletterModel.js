/* newsletter model */

import db from "../config/db.js";

//POST subscribe
export const subscribe = (data, callback) => {
  const sql = `
    INSERT INTO newsletter (name, email)
    VALUES (?, ?)
  `;
  db.query(sql, [data.name, data.email], callback);
};

//get subscribers
export const getSubscribers = (callback) => {
  db.query("SELECT * FROM newsletter ORDER BY created_at DESC", callback);
};

