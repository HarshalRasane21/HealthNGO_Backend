// Load environment variables
import dotenv from "dotenv";

dotenv.config();

// Import Express app
import app from './app.js';


//port
const PORT = process.env.PORT;


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
