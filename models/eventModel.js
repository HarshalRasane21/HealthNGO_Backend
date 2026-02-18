/* event model */

import db from "../config/db.js";


//create event
export const createEvent = (data, callback) => {
  const sql = `
    INSERT INTO events (title, description, event_date, location, image)
    VALUES (?, ?, ?, ?, ?)
  `;
  db.query(
    sql,
    [data.title, data.description, data.event_date, data.location, data.image],
    callback
  );
};

//get events 
export const getEvents = (callback) => {
  db.query("SELECT * FROM events ORDER BY created_at DESC", callback);
};

//update event
export const updateEvent = (id, data, callback) => {
  const sql = `
    UPDATE events
    SET title=?, description=?, event_date=?, location=?, image=?
    WHERE id=?
  `;
  db.query(
    sql,
    [data.title, data.description, data.event_date, data.location, data.image, id],
    callback
  );
};


//get upcoming events using special query
export const upcomingevent = (callback) => {
  db.query("SELECT COUNT(id) as upcoming FROM events WHERE event_date >= CURDATE() ORDER BY event_date ASC;", callback);
}

//delete event
export const deleteEvent = (id, callback) => {
  db.query("DELETE FROM events WHERE id=?", [id], callback);
};

//get event by id
export const getEventById = (id, callback) => {
  db.query("SELECT * FROM events where id=?",[id], callback);
};