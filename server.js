import app from "./app.js";
import express from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 10000;

// ✅ Omogući CORS za sve (možeš kasnije ograničiti na svoj domen)
app.use(cors());

// ✅ Root ruta (proveri da li backend radi)
app.get('/', (req, res) => {
  res.send('Backend is running 🚀');
});

// ✅ Status ruta (frontend će ovo zvati)
app.get('/status', (req, res) => {
  res.json({ status: 'ok', message: 'Backend is running 🚀' });
});

app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});

