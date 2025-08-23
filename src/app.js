import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import healthRoute from "./routes/health.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});

app.get("/status", (req, res) => {
  res.json({ status: "ok", message: "Backend is running 🚀" });
});

app.use("/api/health", healthRoute);

export default app;
