import serverless from "serverless-http";
import express from "express";
import dotenv from "dotenv";
import { AppDataSource } from "../datasource";
import userRoute from "../routes/userRoute";

dotenv.config();
const app = express();

app.use(express.json());
app.use("/api/users", userRoute);

AppDataSource.initialize()
  .then(() => console.log("Database connected successfully!"))
  .catch((error) => console.error("Database connection error:", error));

module.exports.handler = serverless(app);
