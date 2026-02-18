/* Blog Model */

import db from "../config/db.js"

//create blog
export const createBlog = (data, callback) => {
  const sql = `
    INSERT INTO blogs (title, category, content, image, author, date)
    VALUES (?, ?, ?, ?, ?, NOW())
  `;
  db.query(sql, [data.title, data.category, data.content, data.image, data.author], callback);
};


//get all blogs
export const getAllBlogs = (callback) => {
  db.query("SELECT * FROM blogs ORDER BY created_at DESC", callback);
};

//get totalblog as number
export const totalblogs = (callback) => {
  db.query("SELECT COUNT(id) as totalblogs FROM blogs", callback);
}


//update blog
export const updateBlog = (id, data, callback) => {
  const sql = `
    UPDATE blogs
    SET title=?, category=?, content=?, image=?
    WHERE id=?
  `;
  db.query(sql, [data.title, data.category, data.content, data.image, id], callback);
};


//delete blog by id
export const deleteBlog = (id, callback) => {
  db.query("DELETE FROM blogs WHERE id=?", [id], callback);
};

//get blog by id
export const getBlogById = (id, callback) => {
  db.query("SELECT * FROM blogs where id=?",[id], callback);
};
