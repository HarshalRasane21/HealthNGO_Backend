import express from "express"
const router = express.Router();
import {createProgram, getPrograms, updateProgram, deleteProgram, getProgramById} from "../controllers/programController.js"
import upload from "../middleware/upload.js";


//create program
router.post("/", upload.single("image"), createProgram);

//get programs
router.get("/", getPrograms);

//get program by id
router.get("/:id", getProgramById);

//update program by id
router.put("/:id", upload.single("image"), updateProgram);

//delete program by id
router.delete("/:id", deleteProgram);

export default router;
