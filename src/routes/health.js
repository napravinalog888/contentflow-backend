import express from "express";

const router = express.Router();

// test ruta
router.get("/", (req, res) => {
  res.json({ status: "ok", message: "Backend is running 🚀" });
});

export default router;
