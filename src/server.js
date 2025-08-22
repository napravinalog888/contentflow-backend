import app from "./app.js";
import express from 'express';
const app = express();
const PORT = process.env.PORT || 10000;

// Test ruta
app.get('/', (req, res) => {
  res.send('Backend is running 🚀');
});

// Primer status rute
app.get('/status', (req, res) => {
  res.json({ status: 'ok' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

