import express from "express";
import dotenv from "dotenv";
import { AppDataSource } from "./datasource";
import userRoute from "./routes/userRoute";  // Correctly importing the userRoute
import cors from "cors"; 

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());

app.use(express.json());
app.use("/api/users", userRoute);  // Use the userRoute for handling requests to /api/users

AppDataSource.initialize()
  .then(() => {
    console.log("Database connected successfully!");
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
      console.log("dsdsd", process.env.DB_HOST)
    });
  })
  .catch((error) => console.error("Database connection error:", error));
