import express from "express";
import {
  createVolunteer,
  getVolunteers,
  deleteVolunteer,
} from "../controllers/volunteerController.js";

const router = express.Router();


//create volunteer
router.post("/", createVolunteer);

//get all volunteer
router.get("/", getVolunteers);

//delete volunteer by id
router.delete("/:id", deleteVolunteer);

export default router;
