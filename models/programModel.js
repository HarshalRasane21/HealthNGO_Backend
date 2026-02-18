/* program model */

import db from "../config/db.js";


//create program
export const createProgram = (data, callback) => {
  const sql = `
    INSERT INTO programs (title, description, image)
    VALUES (?, ?, ?)
  `;
  db.query(sql, [data.title, data.description, data.image], callback);
};


//get all programs
export const getPrograms = (callback) => {
  db.query("SELECT * FROM programs ORDER BY created_at DESC", callback);
};

// update program
export const updateProgram = (id, data, callback) => {
  const sql = `
    UPDATE programs
    SET title=?, description=?, image=?
    WHERE id=?
  `;
  db.query(sql, [data.title, data.description, data.image, id], callback);
};


//delete program by id
export const deleteProgram = (id, callback) => {
  db.query("DELETE FROM programs WHERE id=?", [id], callback);
};

//get program by id
export const getProgramById = (id, callback) => {
  db.query("SELECT * FROM programs where id=?",[id], callback);
};