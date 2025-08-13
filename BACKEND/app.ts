import express from "express";
import cors from "cors";
import { AppDataSource } from "./src/dbconfigs/database";
import loginRoutes from "./src/routes/Login.routes";
import registerRoutes from "./src/routes/Register.routes";

const app = express();


app.use(cors({
  origin: "*", 
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type"],
}));

app.use(express.json());


app.use("/api/login", loginRoutes);
app.use("/api/register", registerRoutes);


AppDataSource.initialize()
  .then(() => {
    console.log("Database connected");

    app.listen(5000, () => {
      console.log("Server running on http://localhost:5000");
    });
  })
  .catch((err) => {
    console.error("Database connection error:", err);
  });
