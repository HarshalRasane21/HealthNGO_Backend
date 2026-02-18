import * as blogModel from "../models/blogModel.js"


//create blog
export const createBlog = (req, res) => {
  const { title, category, content, author } = req.body;
  const image = req.file ? req.file.buffer : null;

  //sending enter new blog data
  blogModel.createBlog({ title, category, content, image, author }, (err) => {
    if (err) return res.status(500).json(err);
    res.json({ message: "Blog created successfully" });
  });
};

//get total blogs as number
export const totalblogs = (req, res) => {
  blogModel.totalblogs((err, result) => {
    if(err) return res.status(500).json(err);
    res.json(result);
  });
};

// get blogs 
export const getBlogs = (req, res) => {
  blogModel.getAllBlogs((err, results) => {
    if (err) return res.status(500).json(err);

    // Convert BLOB to base64
    const blogs = results.map((blog) => ({
      ...blog,
      image: blog.image
        ? `data:image/jpeg;base64,${blog.image.toString("base64")}`
        : null,

      // Format date column as "Feb 8, 2026"
      date: blog.date
        ? new Date(blog.date).toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
          })
        : null,
    }));

    res.json(blogs);
  });
};


// update blog
export const updateBlog = (req, res) => {
  const { title, category, content } = req.body;
  const image = req.file ? req.file.buffer : null;

  blogModel.updateBlog(
    req.params.id,
    { title, category, content, image },
    (err) => {
      if (err) return res.status(500).json(err);
      res.json({ message: "Blog updated" });
    }
  );
};


//delete blog by id
export const deleteBlog = (req, res) => {
  blogModel.deleteBlog(req.params.id, (err) => {
    if (err) return res.status(500).json(err);
    res.json({ message: "Blog deleted" });
  });
};

//get blog by id
export const getBlogById = (req, res) => {
  const { id } = req.params;
  blogModel.getBlogById(id, (err, results) => {
    if (err) return res.status(500).json(err);

    if (!results || results.length === 0) {
      return res.status(404).json({ message: "Blog not found" });
    }

    const blog = results[0];

    //Convert BLOB to base64
    const formattedBlog = {
      ...blog,
      image: blog.image
        ? `data:image/jpeg;base64,${blog.image.toString("base64")}`
        : null,

      // Format date column as "Feb 8, 2026"
      date: blog.date
        ? new Date(blog.date).toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
          })
        : null,
    };

    res.json(formattedBlog);
  });
};


