import "reflect-metadata";
import dotenv from "dotenv";
import { AppDataSource } from "./src/dbconfigs/database";
import app from "./app";

dotenv.config();

const PORT = process.env.PORT;

AppDataSource.initialize()
  .then(() => {
    console.log("Database connected ");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Database connection error:", err);
  });
