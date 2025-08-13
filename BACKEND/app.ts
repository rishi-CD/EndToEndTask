import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import routes from "./src/routes/Index.routes";

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api", routes);

app.use(cors({
  origin: "http://localhost:5173", 
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type"]
}));

app.get("/", (req, res) => {
  res.json({ message: "Meal Tracker Backend (TypeORM) running" });
});

export default app;
