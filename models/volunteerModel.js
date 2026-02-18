/* volunteer model */


import db from "../config/db.js";

// Create Volunteer
export const createVolunteer = (data, callback) => {
  const sql = `
    INSERT INTO volunteers 
    (full_name, email, phone, skills, availability, message)
    VALUES (?, ?, ?, ?, ?, ?)
  `;

  db.query(
    sql,
    [
      data.full_name,
      data.email,
      data.phone,
      data.skills,
      data.availability,
      data.message,
    ],
    callback
  );
};

// Get All Volunteers
export const getAllVolunteers = (callback) => {
  db.query("SELECT * FROM volunteers ORDER BY created_at DESC", callback);
};

// Delete Volunteer by id
export const deleteVolunteer = (id, callback) => {
  db.query("DELETE FROM volunteers WHERE id = ?", [id], callback);
};
