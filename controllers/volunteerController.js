import * as volunteerModel from "../models/volunteerModel.js";

// Create Volunteer
export const createVolunteer = (req, res) => {
  volunteerModel.createVolunteer(req.body, (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json(err);
    }
    res.status(201).json({ message: "Volunteer Registered Successfully" });
  });
};

// Get All Volunteer
export const getVolunteers = (req, res) => {
  volunteerModel.getAllVolunteers((err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results);
  });
};

// Delete Volunteer by id
export const deleteVolunteer = (req, res) => {
  const id = req.params.id;

  volunteerModel.deleteVolunteer(id, (err, result) => {
    if (err) return res.status(500).json(err);
    res.json({ message: "Volunteer Deleted Successfully" });
  });
};
