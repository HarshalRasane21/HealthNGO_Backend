import * as eventModel from "../models/eventModel.js"


//create event
export const createEvent = (req, res) => {
  const { title, description, event_date, location } = req.body;
  const image = req.file ? req.file.buffer : null;

  eventModel.createEvent(
    { title, description, event_date, location, image },
    (err) => {
      if (err) return res.status(500).json(err);
      res.json({ message: "Event created successfully" });
    }
  );
};


//get event
export const getEvents = (req, res) => {
  eventModel.getEvents((err, results) => {
    if (err) return res.status(500).json(err);

    const events = results.map((event) => ({
      ...event,
      //Convert BLOB to base64
      image: event.image
        ? `data:image/jpeg;base64,${event.image.toString("base64")}`
        : null,

        // Format date column as "Feb 8, 2026"
      date: event.event_date
        ? new Date(event.event_date).toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
          })
        : null,
    }));

    res.json(events);
  });
};


//get upcoming events as number
export const upcomingevents = (req, res) => {
  eventModel.upcomingevent((err, result) => {
    if(err) return res.status(500).json(err);
    res.json(result);
  });
};


//update event
export const updateEvent = (req, res) => {
  const { title, description, event_date, location } = req.body;
  const image = req.file ? req.file.buffer : null;

  eventModel.updateEvent(
    req.params.id,
    { title, description, event_date, location, image },
    (err) => {
      if (err) return res.status(500).json(err);
      res.json({ message: "Event updated successfully" });
    }
  );
};


//delete event by id
export const deleteEvent = (req, res) => {
  eventModel.deleteEvent(req.params.id, (err) => {
    if (err) return res.status(500).json(err);
    res.json({ message: "Event deleted successfully" });
  });
};


export const getEventById = (req, res) => {
  const { id } = req.params;
  eventModel.getEventById(id, (err, results) => {
    if (err) return res.status(500).json(err);

    if (!results || results.length === 0) {
      return res.status(404).json({ message: "Event not found" });
    }

    const Event = results[0];

    const formattedEvent = {
      ...Event,
      image: Event.image
        ? `data:image/jpeg;base64,${Event.image.toString("base64")}`
        : null,

      // Format date column as "Feb 8, 2026"
      date: Event.event_date
        ? new Date(Event.event_date).toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
          })
        : null,
    };

    res.json(formattedEvent);
  });
};