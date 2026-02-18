import express from "express"
const router = express.Router();
import {createEvent, getEvents, updateEvent, deleteEvent, upcomingevents, getEventById} from "../controllers/eventController.js"
import upload from "../middleware/upload.js";

//create event
router.post("/", upload.single("image"), createEvent);

// get events
router.get("/", getEvents);

//get upcoming events by number
router.get("/upcomingevents", upcomingevents);

//update event
router.put("/:id", upload.single("image"), updateEvent);

//delete event
router.delete("/:id", deleteEvent);

//get event by id
router.get("/:id", getEventById);

export default router;
