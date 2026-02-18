/* Blog Routes */

import express from "express"
const router = express.Router();

import { createBlog, getBlogs, updateBlog, deleteBlog, getBlogById, totalblogs } from "../controllers/blogController.js";
import upload from "../middleware/upload.js";

//create blog
router.post("/", upload.single("image"), createBlog);

//get blogs
router.get("/", getBlogs);

//get totalblogs as number
router.get("/totalblogs", totalblogs);

//get blogbyid
router.get("/:id", getBlogById);

//update blog
router.put("/:id", upload.single("image"), updateBlog);

//delete blog by id
router.delete("/:id", deleteBlog);


export default router;
