import * as programModel from "../models/programModel.js"


//create program
export const createProgram = (req, res) => {
  const { title, description } = req.body;
  const image = req.file ? req.file.buffer : null;

  programModel.createProgram(
    { title, description, image },
    (err) => {
      if (err) return res.status(500).json(err);
      res.json({ message: "Program created successfully" });
    }
  );
};

//get program
export const getPrograms = (req, res) => {
  programModel.getPrograms((err, results) => {
    if (err) return res.status(500).json(err);

    const programs = results.map((program) => ({
      ...program,
      //Convert BLOB to base64
      image: program.image
        ? `data:image/jpeg;base64,${program.image.toString("base64")}`
        : null,
    }));

    res.json(programs);
  });
};


//update program
export const updateProgram = (req, res) => {
  const { title, description } = req.body;
  const image = req.file ? req.file.buffer : null;

  programModel.updateProgram(
    req.params.id,
    { title, description, image },
    (err) => {
      if (err) return res.status(500).json(err);
      res.json({ message: "Program updated successfully" });
    }
  );
};


//delete program by id 
export const deleteProgram = (req, res) => {
  programModel.deleteProgram(req.params.id, (err) => {
    if (err) return res.status(500).json(err);
    res.json({ message: "Program deleted successfully" });
  });
};


//get program by id
export const getProgramById = (req, res) => {
  const { id } = req.params;
  programModel.getProgramById(id, (err, results) => {
    if (err) return res.status(500).json(err);

    if (!results || results.length === 0) {
      return res.status(404).json({ message: "Program not found" });
    }

    const Program = results[0];

    const formattedProgram = {
      ...Program,
      //Convert BLOB to base64
      image: Program.image
        ? `data:image/jpeg;base64,${Program.image.toString("base64")}`
        : null,

      // Format date column as "Feb 8, 2026"
      date: Program.date
        ? new Date(blog.date).toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
          })
        : null,
    };

    res.json(formattedProgram);
  });
};