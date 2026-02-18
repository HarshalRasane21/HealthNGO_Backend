import express from "express"
import cors from "cors"

import blogRoutes from "./routes/blogRoutes.js"
import programRoutes from "./routes/programRoutes.js"
import eventRoutes from "./routes/eventRoutes.js"
import donationRoutes from "./routes/donationRoutes.js"
import newsletterRoutes from "./routes/newsletterRoutes.js"
import volunteerRoutes from "./routes/volunteerRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";
import paymentRoutes from "./routes/paymentRoutes.js";


const app = express();

app.use(cors());
app.use(express.json());


// Test Route
app.get("/", (req, res) => {
  res.send("API is running...");
});


//blog
app.use("/api/blogs", blogRoutes);

//program
app.use("/api/programs", programRoutes);

//event
app.use("/api/events", eventRoutes);

//donation
app.use("/api/donations", donationRoutes);

//newsletter
app.use("/api/newsletter", newsletterRoutes);

//volunteer
app.use("/api/volunteers", volunteerRoutes);

//admin
app.use("/api/admin", adminRoutes);

//payment
app.use("/api/payments", paymentRoutes);

export default app;
