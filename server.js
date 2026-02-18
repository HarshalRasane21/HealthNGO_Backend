// Load environment variables
import dotenv from "dotenv";

dotenv.config();

// Import Express app
import app from './app.js';


//port
const PORT = 5000;


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
